/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
export class AwPatrimonioLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
    }
    /**
     * @return {?}
     */
    listen() {
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'aw-scheda-layout.init':
                    this.dataSource.onInit(payload);
                    this.configuration = payload.configuration;
                    this.route = payload.route;
                    /** @type {?} */
                    let paramId = this.route.snapshot.params.id || "";
                    this.listenRoute();
                    this.loadNavigation(paramId);
                    break;
                case 'aw-scheda-layout.destroy':
                    this.destroyed$.next();
                    break;
                default:
                    break;
            }
        }));
        this.outerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'aw-tree.click':
                    if (payload) {
                        this.emitGlobal('navigate', { path: [this.configuration.get("paths").schedaBasePath + payload], handler: 'router' });
                    }
                    break;
                case "aw-sidebar-header.click":
                    this.dataSource.collapseSidebar();
                    break;
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    listenRoute() {
        this.route.paramMap.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            if (params.get('id')) {
                this.dataSource.loadItem(params.get('id')).subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                (response) => {
                    if (response) {
                        this.emitGlobal('navigate', { path: [this.configuration.get("paths").schedaBasePath + response.item.id], handler: 'router' });
                        this.dataSource.loadContent(response);
                    }
                }));
            }
            else {
                this.dataSource.loadItem();
            }
        }));
    }
    /**
     * @private
     * @param {?} selectedItem
     * @return {?}
     */
    loadNavigation(selectedItem) {
        this.dataSource.getNavigation('patrimonio').subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            if (response) {
                this.dataSource.updateNavigation(response, selectedItem);
            }
            if (selectedItem) {
                this.emitOuter('selectItem', selectedItem);
            }
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwPatrimonioLayoutEH.prototype.destroyed$;
    /**
     * @type {?}
     * @private
     */
    AwPatrimonioLayoutEH.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    AwPatrimonioLayoutEH.prototype.route;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJL0IsTUFBTSxPQUFPLG9CQUFxQixTQUFRLFlBQVk7SUFBdEQ7O1FBQ1UsZUFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBZ0VuRCxDQUFDOzs7O0lBNURRLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyx1QkFBdUI7b0JBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7b0JBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQzs7d0JBQ3ZCLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUU7b0JBQ2pELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDN0IsTUFBTTtnQkFFUixLQUFLLDBCQUEwQjtvQkFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdkIsTUFBTTtnQkFFUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLGVBQWU7b0JBQ2xCLElBQUssT0FBTyxFQUFHO3dCQUNiLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLEVBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO3FCQUNwSDtvQkFDRCxNQUFNO2dCQUNSLEtBQUsseUJBQXlCO29CQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ2xFLE1BQU07YUFFUDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTyxXQUFXO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVM7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRTtZQUN0QyxJQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7O2dCQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7b0JBQ2hFLElBQUcsUUFBUSxFQUFDO3dCQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLEVBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7d0JBQzVILElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUN0QztnQkFDSCxDQUFDLEVBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDNUI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLGNBQWMsQ0FBRSxZQUFZO1FBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ2pFLElBQUksUUFBUSxFQUFFO2dCQUNaLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO2FBQzFEO1lBQ0QsSUFBSyxZQUFZLEVBQUc7Z0JBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO2FBQzVDO1FBQ0QsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0Y7Ozs7OztJQWhFQywwQ0FBaUQ7Ozs7O0lBQ2pELDZDQUEyQjs7Ozs7SUFDM0IscUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgcmVzb2x2ZVNhbml0aXphdGlvbkZuIH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXIvc3JjL3JlbmRlcjMvdmlldy90ZW1wbGF0ZSc7XG5cbmV4cG9ydCBjbGFzcyBBd1BhdHJpbW9uaW9MYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBhbnk7XG4gIHByaXZhdGUgcm91dGU6IGFueTtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0LmluaXQnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xuICAgICAgICAgIHRoaXMucm91dGUgPSBwYXlsb2FkLnJvdXRlO1xuICAgICAgICAgIGxldCBwYXJhbUlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMuaWQgfHwgXCJcIjtcbiAgICAgICAgICB0aGlzLmxpc3RlblJvdXRlKCk7XG4gICAgICAgICAgdGhpcy5sb2FkTmF2aWdhdGlvbihwYXJhbUlkKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0LmRlc3Ryb3knOlxuICAgICAgICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHsgICBcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy10cmVlLmNsaWNrJzpcbiAgICAgICAgICBpZiAoIHBheWxvYWQgKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge3BhdGg6IFt0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwicGF0aHNcIikuc2NoZWRhQmFzZVBhdGggKyBwYXlsb2FkXSwgaGFuZGxlcjogJ3JvdXRlcid9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJhdy1zaWRlYmFyLWhlYWRlci5jbGlja1wiOiB0aGlzLmRhdGFTb3VyY2UuY29sbGFwc2VTaWRlYmFyKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICB9XG4gICAgfSk7ICAgICBcbiAgfVxuXG4gIHByaXZhdGUgbGlzdGVuUm91dGUoKSB7XG4gICAgdGhpcy5yb3V0ZS5wYXJhbU1hcC5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgaWYocGFyYW1zLmdldCgnaWQnKSkgeyAgICAgICBcbiAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZEl0ZW0ocGFyYW1zLmdldCgnaWQnKSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgaWYocmVzcG9uc2Upe1xuICAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge3BhdGg6IFt0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwicGF0aHNcIikuc2NoZWRhQmFzZVBhdGggKyByZXNwb25zZS5pdGVtLmlkXSwgaGFuZGxlcjogJ3JvdXRlcid9KTtcbiAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmxvYWRDb250ZW50KHJlc3BvbnNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pOyAgICAgICAgICAgICBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkSXRlbSgpO1xuICAgICAgfVxuICAgIH0pOyAgICBcbiAgfVxuICBcbiAgcHJpdmF0ZSBsb2FkTmF2aWdhdGlvbiggc2VsZWN0ZWRJdGVtICkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5nZXROYXZpZ2F0aW9uKCdwYXRyaW1vbmlvJykuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYoIHJlc3BvbnNlICl7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVOYXZpZ2F0aW9uKHJlc3BvbnNlLCBzZWxlY3RlZEl0ZW0pO1xuICAgICAgfVxuICAgICAgaWYgKCBzZWxlY3RlZEl0ZW0gKSB7XG4gICAgICAgIHRoaXMuZW1pdE91dGVyKCdzZWxlY3RJdGVtJywgc2VsZWN0ZWRJdGVtKTsgICAgICAgIFxuICAgICAgfVxuICAgICAgfSk7XG4gIH1cbn0iXX0=