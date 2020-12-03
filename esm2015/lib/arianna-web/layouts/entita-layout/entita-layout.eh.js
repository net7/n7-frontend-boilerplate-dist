import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
export class AwEntitaLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
        this.handlePageSizeChange = (v) => {
            this.dataSource.pageSize = v;
            this.dataSource.handleNavUpdate('oggetti-collegati');
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
                    { // changed page size value (pagination)
                        this.dataSource.pageSize = payload;
                        this.dataSource.currentPage = 1; // reset page
                        const options = {
                            context: this.dataSource.selectedTab,
                            config: this.dataSource.configuration,
                            page: this.dataSource.currentPage,
                            pagination: true,
                            size: this.dataSource.pageSize,
                        };
                        this.dataSource.updateComponent('aw-linked-objects', { items: this.dataSource.myResponse.relatedItems }, options);
                    }
                    break;
                case 'n7-smart-pagination.change':
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
        // listen for "page" query param changes
        this.route.queryParams.pipe(map((params) => params.page)).subscribe((page) => {
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
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFlBQVk7SUFBbEQ7O1FBQ1UsZUFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBb0V6Qyx5QkFBb0IsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQTtJQTBDSCxDQUFDO0lBekdRLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyx1QkFBdUI7b0JBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7b0JBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVB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RUFBRTtnQkFDcEIsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsS0FBSyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO29CQUNsRSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxLQUFLLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQ3JELElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztxQkFDcEQ7b0JBQ0QsT0FBTztpQkFDUjtnQkFDRCw4REFBOEQ7Z0JBQzlELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUM5RSxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtvQkFDakIsSUFBSSxHQUFHLEVBQUU7d0JBQ1AsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2pDLGlDQUFpQzt3QkFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ25DLElBQUksWUFBWSxFQUFFOzRCQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQzt5QkFDNUM7cUJBQ0Y7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDTjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQzVCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3RW50aXRhTGF5b3V0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xyXG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgcm91dGU6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBlbnRpdHlJZDogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdhdy1lbnRpdGEtbGF5b3V0LmluaXQnOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcclxuICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcclxuICAgICAgICAgIHRoaXMucm91dGUgPSBwYXlsb2FkLnJvdXRlO1xyXG4gICAgICAgICAgdGhpcy5lbnRpdHlJZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLmlkIHx8ICcnO1xyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMucGFnZSB8fCAxO1xyXG4gICAgICAgICAgdGhpcy5saXN0ZW5Sb3V0ZSh0aGlzLmVudGl0eUlkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdhdy1lbnRpdGEtbGF5b3V0LmRlc3Ryb3knOlxyXG4gICAgICAgICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdhdy1lbnRpdGEtbGF5b3V0LnNob3dtb3JlJzpcclxuICAgICAgICAgIGlmIChwYXlsb2FkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVOYXZVcGRhdGUocGF5bG9hZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2F3LWVudGl0YS1uYXYuY2xpY2snOlxyXG4gICAgICAgICAgaWYgKHBheWxvYWQpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkVGFiID0gcGF5bG9hZDtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZU5hdlVwZGF0ZShwYXlsb2FkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2F3LWxpbmtlZC1vYmplY3RzLmNoYW5nZSc6IHsgLy8gY2hhbmdlZCBwYWdlIHNpemUgdmFsdWUgKHBhZ2luYXRpb24pXHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucGFnZVNpemUgPSBwYXlsb2FkO1xyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlID0gMTsgLy8gcmVzZXQgcGFnZVxyXG4gICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgY29udGV4dDogdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkVGFiLFxyXG4gICAgICAgICAgICBjb25maWc6IHRoaXMuZGF0YVNvdXJjZS5jb25maWd1cmF0aW9uLFxyXG4gICAgICAgICAgICBwYWdlOiB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2UsXHJcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHRydWUsXHJcbiAgICAgICAgICAgIHNpemU6IHRoaXMuZGF0YVNvdXJjZS5wYWdlU2l6ZSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlQ29tcG9uZW50KFxyXG4gICAgICAgICAgICAnYXctbGlua2VkLW9iamVjdHMnLFxyXG4gICAgICAgICAgICB7IGl0ZW1zOiB0aGlzLmRhdGFTb3VyY2UubXlSZXNwb25zZS5yZWxhdGVkSXRlbXMgfSxcclxuICAgICAgICAgICAgb3B0aW9ucyxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBicmVhaztcclxuICAgICAgICBjYXNlICduNy1zbWFydC1wYWdpbmF0aW9uLmNoYW5nZSc6XHJcbiAgICAgICAgICB0aGlzLmhhbmRsZVBhZ2VTaXplQ2hhbmdlKHBheWxvYWQudmFsdWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlUGFnZVNpemVDaGFuZ2UgPSAodikgPT4ge1xyXG4gICAgdGhpcy5kYXRhU291cmNlLnBhZ2VTaXplID0gdjtcclxuICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVOYXZVcGRhdGUoJ29nZ2V0dGktY29sbGVnYXRpJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMaXN0ZW5zIHRvIHJvdXRpbmcgZXZlbnRzIG9mIHRoaXMgbGF5b3V0LlxyXG4gICAqL1xyXG4gIHByaXZhdGUgbGlzdGVuUm91dGUoc2VsZWN0ZWRJdGVtID0gJycsIGZvcmNlUmVsb2FkID0gZmFsc2UpIHtcclxuICAgIC8vIGxpc3RlbiBmb3IgXCJwYWdlXCIgcXVlcnkgcGFyYW0gY2hhbmdlc1xyXG4gICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5waXBlKFxyXG4gICAgICBtYXAoKHBhcmFtczogYW55KSA9PiBwYXJhbXMucGFnZSksXHJcbiAgICApLnN1YnNjcmliZSgocGFnZSkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlICE9PSBwYWdlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlID0gcGFnZTtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlUGFnZU5hdmlnYXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBnZXQgVVJMIHBhcmFtZXRlcnMgd2l0aCBhbmd1bGFyJ3MgcGFyYW1NYXBcclxuICAgIHRoaXMucm91dGUucGFyYW1NYXAuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcclxuICAgICAgLy8gbG9vayBmb3IgaWRcclxuICAgICAgaWYgKHBhcmFtcy5nZXQoJ2lkJykpIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLmN1cnJlbnRJZCA9PT0gcGFyYW1zLmdldCgnaWQnKSAmJiAhZm9yY2VSZWxvYWQpIHtcclxuICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRUYWIgIT09IHBhcmFtcy5nZXQoJ3RhYicpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVOYXZVcGRhdGUocGFyYW1zLmdldCgndGFiJykpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBnZXQgaXRlbSBmcm9tIHJlc3BvbnNlIHdpdGggaWQgPT09IGlkIGFuZCByZXR1cm4gYXMgcHJvbWlzZVxyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkSXRlbShwYXJhbXMuZ2V0KCdpZCcpLCBwYXJhbXMuZ2V0KCdzbHVnJyksIHBhcmFtcy5nZXQoJ3RhYicpKVxyXG4gICAgICAgICAgLnN1YnNjcmliZSgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZENvbnRlbnQocmVzKTtcclxuICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIGVudGl0eSBvZiB0aGlzIHBhZ2VcclxuICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlV2lkZ2V0cyhyZXMpO1xyXG4gICAgICAgICAgICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdzZWxlY3RJdGVtJywgc2VsZWN0ZWRJdGVtKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkSXRlbSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19