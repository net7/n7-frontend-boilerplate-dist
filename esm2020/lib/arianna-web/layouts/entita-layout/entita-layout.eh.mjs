import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
export class AwEntitaLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
        this.handlePageSizeChange = (size) => {
            this.dataSource.pageSize = size;
            this.dataSource.currentPage = 1;
            this.dataSource.handleNavUpdate('oggetti-collegati');
            // this.dataSource.handlePageNavigation();
        };
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-entita-layout.init':
                    this.dataSource.onInit(payload);
                    this.configuration = payload.configuration;
                    this.route = payload.route;
                    this.entityId = this.route.snapshot.params.id || '';
                    this.dataSource.currentPage = this.route.snapshot.params.page || 1;
                    this.listenRoute(this.entityId);
                    // scroll top
                    window.scrollTo(0, 0);
                    break;
                case 'aw-entita-layout.destroy':
                    this.destroyed$.next();
                    break;
                case 'aw-entita-layout.showmore':
                    if (payload) {
                        this.dataSource.handleNavUpdate(payload);
                    }
                    break;
                default:
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-entita-nav.click':
                    if (payload) {
                        this.dataSource.selectedTab = payload;
                        this.dataSource.handleNavUpdate(payload);
                    }
                    break;
                case 'aw-linked-objects.change':
                    {
                        const options = {
                            context: this.dataSource.selectedTab,
                            config: this.dataSource.configuration,
                            dynamicPagination: {
                                total: this.dataSource.myResponse.totalCount,
                            },
                            page: this.dataSource.currentPage,
                            size: this.dataSource.pageSize,
                            pagination: true,
                        };
                        this.dataSource.updateComponent('aw-linked-objects', { items: this.dataSource.myResponse.relatedItems }, options);
                    }
                    break;
                case 'n7-smart-pagination.change': // changed page size value (pagination)
                    this.handlePageSizeChange(payload.value);
                    break;
                default:
                    break;
            }
        });
    }
    /**
     * Listens to routing events of this layout.
     */
    listenRoute(selectedItem = '', forceReload = false) {
        // listen for "page" query param changes-
        this.route.queryParams.pipe(map((params) => ({
            page: params.page,
            size: params.size
        }))).subscribe(({ page, size }) => {
            if (size) {
                this.dataSource.pageSize = size;
            }
            if (this.dataSource.currentPage !== page) {
                this.dataSource.currentPage = page;
                this.dataSource.handlePageNavigation();
            }
        });
        // get URL parameters with angular's paramMap
        this.route.paramMap.subscribe((params) => {
            // look for id
            if (params.get('id')) {
                if (this.dataSource.currentId === params.get('id') && !forceReload) {
                    if (this.dataSource.selectedTab !== params.get('tab')) {
                        this.dataSource.handleNavUpdate(params.get('tab'));
                    }
                    return;
                }
                // get item from response with id === id and return as promise
                this.dataSource.loadItem(params.get('id'), params.get('slug'), params.get('tab'))
                    .subscribe((res) => {
                    if (res) {
                        this.dataSource.loadContent(res);
                        // remove the entity of this page
                        this.dataSource.updateWidgets(res);
                        if (selectedItem) {
                            this.emitOuter('selectItem', selectedItem);
                        }
                    }
                });
            }
            else {
                this.dataSource.loadItem();
            }
            // scroll top
            window.scrollTo(0, 0);
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL2FyaWFubmEtd2ViL2xheW91dHMvZW50aXRhLWxheW91dC9lbnRpdGEtbGF5b3V0LmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsWUFBWTtJQUFsRDs7UUFDVSxlQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUF1RXpDLHlCQUFvQixHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3JELDBDQUEwQztRQUM1QyxDQUFDLENBQUE7SUFrREgsQ0FBQztJQXRIUSxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssdUJBQXVCO29CQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO29CQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENB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NEJBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO3lCQUM1QztxQkFDRjtnQkFDSCxDQUFDLENBQUMsQ0FBQzthQUNOO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDNUI7WUFDRCxhQUFhO1lBQ2IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3RW50aXRhTGF5b3V0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xyXG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgcm91dGU6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBlbnRpdHlJZDogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdhdy1lbnRpdGEtbGF5b3V0LmluaXQnOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcclxuICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcclxuICAgICAgICAgIHRoaXMucm91dGUgPSBwYXlsb2FkLnJvdXRlO1xyXG4gICAgICAgICAgdGhpcy5lbnRpdHlJZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLmlkIHx8ICcnO1xyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMucGFnZSB8fCAxO1xyXG4gICAgICAgICAgdGhpcy5saXN0ZW5Sb3V0ZSh0aGlzLmVudGl0eUlkKTtcclxuICAgICAgICAgIC8vIHNjcm9sbCB0b3BcclxuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdhdy1lbnRpdGEtbGF5b3V0LmRlc3Ryb3knOlxyXG4gICAgICAgICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdhdy1lbnRpdGEtbGF5b3V0LnNob3dtb3JlJzpcclxuICAgICAgICAgIGlmIChwYXlsb2FkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVOYXZVcGRhdGUocGF5bG9hZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2F3LWVudGl0YS1uYXYuY2xpY2snOlxyXG4gICAgICAgICAgaWYgKHBheWxvYWQpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkVGFiID0gcGF5bG9hZDtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZU5hdlVwZGF0ZShwYXlsb2FkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2F3LWxpbmtlZC1vYmplY3RzLmNoYW5nZSc6IHtcclxuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQ6IHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZFRhYixcclxuICAgICAgICAgICAgY29uZmlnOiB0aGlzLmRhdGFTb3VyY2UuY29uZmlndXJhdGlvbixcclxuICAgICAgICAgICAgZHluYW1pY1BhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICB0b3RhbDogdGhpcy5kYXRhU291cmNlLm15UmVzcG9uc2UudG90YWxDb3VudCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGFnZTogdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlLFxyXG4gICAgICAgICAgICBzaXplOiB0aGlzLmRhdGFTb3VyY2UucGFnZVNpemUsXHJcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHRydWUsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUNvbXBvbmVudChcclxuICAgICAgICAgICAgJ2F3LWxpbmtlZC1vYmplY3RzJyxcclxuICAgICAgICAgICAgeyBpdGVtczogdGhpcy5kYXRhU291cmNlLm15UmVzcG9uc2UucmVsYXRlZEl0ZW1zIH0sXHJcbiAgICAgICAgICAgIG9wdGlvbnMsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbjctc21hcnQtcGFnaW5hdGlvbi5jaGFuZ2UnOiAvLyBjaGFuZ2VkIHBhZ2Ugc2l6ZSB2YWx1ZSAocGFnaW5hdGlvbilcclxuICAgICAgICAgIHRoaXMuaGFuZGxlUGFnZVNpemVDaGFuZ2UocGF5bG9hZC52YWx1ZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVQYWdlU2l6ZUNoYW5nZSA9IChzaXplKSA9PiB7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2UucGFnZVNpemUgPSBzaXplO1xyXG4gICAgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlID0gMTtcclxuICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVOYXZVcGRhdGUoJ29nZ2V0dGktY29sbGVnYXRpJyk7XHJcbiAgICAvLyB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlUGFnZU5hdmlnYXRpb24oKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExpc3RlbnMgdG8gcm91dGluZyBldmVudHMgb2YgdGhpcyBsYXlvdXQuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBsaXN0ZW5Sb3V0ZShzZWxlY3RlZEl0ZW0gPSAnJywgZm9yY2VSZWxvYWQgPSBmYWxzZSkge1xyXG4gICAgLy8gbGlzdGVuIGZvciBcInBhZ2VcIiBxdWVyeSBwYXJhbSBjaGFuZ2VzLVxyXG4gICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5waXBlKFxyXG4gICAgICBtYXAoKHBhcmFtczogYW55KSA9PiAoe1xyXG4gICAgICAgIHBhZ2U6IHBhcmFtcy5wYWdlLFxyXG4gICAgICAgIHNpemU6IHBhcmFtcy5zaXplXHJcbiAgICAgIH0pKSxcclxuICAgICkuc3Vic2NyaWJlKCh7IHBhZ2UsIHNpemUgfSkgPT4ge1xyXG4gICAgICBpZiAoc2l6ZSkge1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdlU2l6ZSA9IHNpemU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZSAhPT0gcGFnZSkge1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZSA9IHBhZ2U7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZVBhZ2VOYXZpZ2F0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gZ2V0IFVSTCBwYXJhbWV0ZXJzIHdpdGggYW5ndWxhcidzIHBhcmFtTWFwXHJcbiAgICB0aGlzLnJvdXRlLnBhcmFtTWFwLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XHJcbiAgICAgIC8vIGxvb2sgZm9yIGlkXHJcbiAgICAgIGlmIChwYXJhbXMuZ2V0KCdpZCcpKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50SWQgPT09IHBhcmFtcy5nZXQoJ2lkJykgJiYgIWZvcmNlUmVsb2FkKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLnNlbGVjdGVkVGFiICE9PSBwYXJhbXMuZ2V0KCd0YWInKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlTmF2VXBkYXRlKHBhcmFtcy5nZXQoJ3RhYicpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZ2V0IGl0ZW0gZnJvbSByZXNwb25zZSB3aXRoIGlkID09PSBpZCBhbmQgcmV0dXJuIGFzIHByb21pc2VcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZEl0ZW0ocGFyYW1zLmdldCgnaWQnKSwgcGFyYW1zLmdldCgnc2x1ZycpLCBwYXJhbXMuZ2V0KCd0YWInKSlcclxuICAgICAgICAgIC5zdWJzY3JpYmUoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmxvYWRDb250ZW50KHJlcyk7XHJcbiAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBlbnRpdHkgb2YgdGhpcyBwYWdlXHJcbiAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZVdpZGdldHMocmVzKTtcclxuICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignc2VsZWN0SXRlbScsIHNlbGVjdGVkSXRlbSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZEl0ZW0oKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBzY3JvbGwgdG9wXHJcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=