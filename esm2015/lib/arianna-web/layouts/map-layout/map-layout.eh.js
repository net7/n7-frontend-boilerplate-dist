import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
// import { map } from 'rxjs/operators';
// import helpers from '../../../common/helpers';
export class AwMapLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
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
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-map-layout.init':
                    this.dataSource.onInit(payload);
                    this.configuration = payload.configuration;
                    this.route = payload.route;
                    // this.entityId = this.route.snapshot.params.id || '';
                    // this.listenRoute(this.entityId);
                    break;
                case 'aw-map-layout.destroy':
                    this.destroyed$.next();
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
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL21hcC1sYXlvdXQvbWFwLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQix3Q0FBd0M7QUFDeEMsaURBQWlEO0FBRWpELE1BQU0sT0FBTyxhQUFjLFNBQVEsWUFBWTtJQUEvQzs7UUFDVSxlQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFvQ2pELGdFQUFnRTtRQUNoRSw2Q0FBNkM7UUFDN0MsaUNBQWlDO1FBQ2pDLHlDQUF5QztRQUN6Qyw0QkFBNEI7UUFDNUIsa0RBQWtEO1FBQ2xELDRDQUE0QztRQUM1QyxnREFBZ0Q7UUFDaEQsUUFBUTtRQUNSLFFBQVE7UUFDUixrREFBa0Q7UUFDbEQsZ0RBQWdEO1FBQ2hELHFCQUFxQjtRQUNyQiw4QkFBOEI7UUFDOUIsOEVBQThFO1FBQzlFLG1FQUFtRTtRQUNuRSxnRUFBZ0U7UUFDaEUsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsdUVBQXVFO1FBQ3ZFLDBGQUEwRjtRQUMxRixnQ0FBZ0M7UUFDaEMsdUJBQXVCO1FBQ3ZCLGdEQUFnRDtRQUNoRCxnREFBZ0Q7UUFDaEQsbURBQW1EO1FBQ25ELHFFQUFxRTtRQUNyRSxrREFBa0Q7UUFDbEQsa0NBQWtDO1FBQ2xDLDREQUE0RDtRQUM1RCxnQkFBZ0I7UUFDaEIsZ0VBQWdFO1FBQ2hFLGNBQWM7UUFDZCxjQUFjO1FBQ2QsZUFBZTtRQUNmLG9DQUFvQztRQUNwQyxRQUFRO1FBQ1IsUUFBUTtRQUNSLElBQUk7SUFDTixDQUFDO0lBcEVRLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxvQkFBb0I7b0JBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7b0JBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDM0IsdURBQXVEO29CQUN2RCxtQ0FBbUM7b0JBQ25DLE1BQU07Z0JBRVIsS0FBSyx1QkFBdUI7b0JBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3ZCLE1BQU07Z0JBRVI7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCx1REFBdUQ7UUFDdkQsb0JBQW9CO1FBQ3BCLGVBQWU7UUFDZixlQUFlO1FBQ2YsTUFBTTtRQUNOLE1BQU07SUFDUixDQUFDO0NBMENGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuLy8gaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuLy8gaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdNYXBMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IGFueTtcblxuICBwcml2YXRlIHJvdXRlOiBhbnk7XG5cbiAgcHJpdmF0ZSBlbnRpdHlJZDogc3RyaW5nO1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LW1hcC1sYXlvdXQuaW5pdCc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcbiAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XG4gICAgICAgICAgdGhpcy5yb3V0ZSA9IHBheWxvYWQucm91dGU7XG4gICAgICAgICAgLy8gdGhpcy5lbnRpdHlJZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLmlkIHx8ICcnO1xuICAgICAgICAgIC8vIHRoaXMubGlzdGVuUm91dGUodGhpcy5lbnRpdHlJZCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctbWFwLWxheW91dC5kZXN0cm95JzpcbiAgICAgICAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgLy8gICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAvLyAgICAgZGVmYXVsdDpcbiAgICAvLyAgICAgICBicmVhaztcbiAgICAvLyAgIH1cbiAgICAvLyB9KTtcbiAgfVxuXG4gIC8vIHByaXZhdGUgbGlzdGVuUm91dGUoc2VsZWN0ZWRJdGVtID0gJycsIGZvcmNlUmVsb2FkID0gZmFsc2UpIHtcbiAgLy8gICAvLyBsaXN0ZW4gZm9yIFwicGFnZVwiIHF1ZXJ5IHBhcmFtIGNoYW5nZXNcbiAgLy8gICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnBpcGUoXG4gIC8vICAgICBtYXAoKHBhcmFtczogYW55KSA9PiBwYXJhbXMucGFnZSksXG4gIC8vICAgKS5zdWJzY3JpYmUoKHBhZ2UpID0+IHtcbiAgLy8gICAgIGlmICh0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2UgIT09IHBhZ2UpIHtcbiAgLy8gICAgICAgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlID0gcGFnZTtcbiAgLy8gICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZVBhZ2VOYXZpZ2F0aW9uKCk7XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG4gIC8vICAgLy8gZ2V0IFVSTCBwYXJhbWV0ZXJzIHdpdGggYW5ndWxhcidzIHBhcmFtTWFwXG4gIC8vICAgdGhpcy5yb3V0ZS5wYXJhbU1hcC5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAvLyAgICAgLy8gbG9vayBmb3IgaWRcbiAgLy8gICAgIGlmIChwYXJhbXMuZ2V0KCdpZCcpKSB7XG4gIC8vICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2UuY3VycmVudElkID09PSBwYXJhbXMuZ2V0KCdpZCcpICYmICFmb3JjZVJlbG9hZCkge1xuICAvLyAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRUYWIgIT09IHBhcmFtcy5nZXQoJ3RhYicpKSB7XG4gIC8vICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlTmF2VXBkYXRlKHBhcmFtcy5nZXQoJ3RhYicpKTtcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgICAgcmV0dXJuO1xuICAvLyAgICAgICB9XG4gIC8vICAgICAgIC8vIGdldCBpdGVtIGZyb20gcmVzcG9uc2Ugd2l0aCBpZCA9PT0gaWQgYW5kIHJldHVybiBhcyBwcm9taXNlXG4gIC8vICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkSXRlbShwYXJhbXMuZ2V0KCdpZCcpLCBwYXJhbXMuZ2V0KCdzbHVnJyksIHBhcmFtcy5nZXQoJ3RhYicpKVxuICAvLyAgICAgICAgIC5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAvLyAgICAgICAgICAgaWYgKHJlcykge1xuICAvLyAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZENvbnRlbnQocmVzKTtcbiAgLy8gICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBlbnRpdHkgb2YgdGhpcyBwYWdlXG4gIC8vICAgICAgICAgICAgIGNvbnN0IGVudGl0aWVzID0gcmVzLnJlbGF0ZWRFbnRpdGllc1xuICAvLyAgICAgICAgICAgICAgIC5maWx0ZXIoKGVudGl0eSkgPT4gZW50aXR5LmlkICE9PSBwYXJhbXMuZ2V0KCdpZCcpKTtcbiAgLy8gICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZVdpZGdldHMocmVzKTtcbiAgLy8gICAgICAgICAgICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAvLyAgICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdzZWxlY3RJdGVtJywgc2VsZWN0ZWRJdGVtKTtcbiAgLy8gICAgICAgICAgICAgfVxuICAvLyAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZmlsdGVyYnViYmxlcmVzcG9uc2UnLCBlbnRpdGllcyk7XG4gIC8vICAgICAgICAgICB9XG4gIC8vICAgICAgICAgfSk7XG4gIC8vICAgICB9IGVsc2Uge1xuICAvLyAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZEl0ZW0oKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9KTtcbiAgLy8gfVxufVxuIl19