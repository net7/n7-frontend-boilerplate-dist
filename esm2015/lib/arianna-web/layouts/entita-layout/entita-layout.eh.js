/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
export class AwEntitaLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
    }
    // private selectedTab: string;
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
                case 'aw-entita-layout.init':
                    this.dataSource.onInit(payload);
                    this.configuration = payload.configuration;
                    this.route = payload.route;
                    this.entityId = this.route.snapshot.params.id || "";
                    this.dataSource.currentPage = this.route.snapshot.params.page || '';
                    this.listenRoute();
                    this.loadNavigation(this.entityId);
                    break;
                case 'aw-entita-layout.destroy':
                    this.destroyed$.next();
                    break;
                case 'aw-entita-layout.showmore':
                    if (payload) {
                        this.emitGlobal('navigate', {
                            path: [
                                this.configuration.get("paths").entitaBasePath
                                    + '/' +
                                    this.entityId
                                    + '/' +
                                    payload
                            ],
                            handler: 'router'
                        });
                    }
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
                case 'aw-entita-nav.click':
                    if (payload) {
                        this.dataSource.selectedTab = payload;
                        this.dataSource.handleNavUpdate(payload);
                        this.emitGlobal('navigate', {
                            path: [
                                this.configuration.get("paths").entitaBasePath
                                    + '/' +
                                    this.entityId
                                    + '/' +
                                    payload
                            ],
                            handler: 'router'
                        });
                    }
                    break;
                case 'aw-linked-objects.pagination':
                    this.dataSource.currentPage = payload.split('-')[1];
                    this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [`aw/entita/${this.route.snapshot.params.id}/oggetti-collegati/${payload.split('-')[1]}`]
                    });
                    break;
                case 'aw-linked-objects.goto':
                    /** @type {?} */
                    let targetPage = Number(payload.replace('goto-', ''))
                    // this.emitGlobal('navigate', {
                    //   handler: 'router',
                    //   path: [`aw/entita/${this.route.snapshot.params.id}/oggetti-collegati/${targetPage}`]
                    // });
                    ;
                    // this.emitGlobal('navigate', {
                    //   handler: 'router',
                    //   path: [`aw/entita/${this.route.snapshot.params.id}/oggetti-collegati/${targetPage}`]
                    // });
                    break;
                case 'aw-linked-objects.change':
                    this.dataSource.pageSize = payload;
                    this.listenRoute(); // reloads the page content with the new page size
                case "aw-bubble-chart.bubble-tooltip-goto-click":
                    if (!payload || !payload.entityId)
                        return;
                    this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [`aw/entita/${payload.entityId}/overview`]
                    });
                    break;
                default:
                    break;
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    listenRoute() {
        /**
         * Listens to routing events of this layout.
         */
        // get URL parameters with angular's paramMap
        this.route.paramMap.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            // look for id
            if (params.get('id')) {
                // get item from response with id === id and return as promise
                this.dataSource.loadItem(params.get('id'), params.get('tab')).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                (res) => {
                    if (res) {
                        this.dataSource.loadContent(res);
                        res['connectedEntities'] = res.entities;
                        /** @type {?} */
                        let connectedEntities = { source: res };
                        if (this.dataSource.bubblesEnabled) {
                            this.emitOuter('filterbubbleresponse', connectedEntities);
                        }
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
        console.log('LOAD NAVIGATION');
        this.dataSource.getNavigation(selectedItem).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            if (response) {
                this.dataSource.updateWidgets(response);
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
    AwEntitaLayoutEH.prototype.destroyed$;
    /**
     * @type {?}
     * @private
     */
    AwEntitaLayoutEH.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    AwEntitaLayoutEH.prototype.route;
    /**
     * @type {?}
     * @private
     */
    AwEntitaLayoutEH.prototype.entityId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFlBQVk7SUFBbEQ7O1FBQ1UsZUFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBaUluRCxDQUFDOzs7OztJQTNIUSxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssdUJBQXVCO29CQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO29CQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7b0JBQ3BELElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO29CQUNwRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxD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Q0FBQzthQUN6QztZQUNELElBQUksWUFBWSxFQUFFO2dCQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQzthQUM1QztRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQUVGOzs7Ozs7SUFqSUMsc0NBQWlEOzs7OztJQUNqRCx5Q0FBMkI7Ozs7O0lBQzNCLGlDQUFtQjs7Ozs7SUFDbkIsb0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY2xhc3MgQXdFbnRpdGFMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBhbnk7XG4gIHByaXZhdGUgcm91dGU6IGFueTtcbiAgcHJpdmF0ZSBlbnRpdHlJZDogc3RyaW5nO1xuICAvLyBwcml2YXRlIHNlbGVjdGVkVGFiOiBzdHJpbmc7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctZW50aXRhLWxheW91dC5pbml0JzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xuICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcbiAgICAgICAgICB0aGlzLnJvdXRlID0gcGF5bG9hZC5yb3V0ZTtcbiAgICAgICAgICB0aGlzLmVudGl0eUlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMuaWQgfHwgXCJcIjtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2UgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5wYWdlIHx8ICcnO1xuICAgICAgICAgIHRoaXMubGlzdGVuUm91dGUoKTtcbiAgICAgICAgICB0aGlzLmxvYWROYXZpZ2F0aW9uKHRoaXMuZW50aXR5SWQpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2F3LWVudGl0YS1sYXlvdXQuZGVzdHJveSc6XG4gICAgICAgICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdhdy1lbnRpdGEtbGF5b3V0LnNob3dtb3JlJzpcbiAgICAgICAgICBpZiAocGF5bG9hZCkge1xuICAgICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgICAgcGF0aDogW1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJwYXRoc1wiKS5lbnRpdGFCYXNlUGF0aFxuICAgICAgICAgICAgICAgICsgJy8nICtcbiAgICAgICAgICAgICAgICB0aGlzLmVudGl0eUlkXG4gICAgICAgICAgICAgICAgKyAnLycgK1xuICAgICAgICAgICAgICAgIHBheWxvYWRcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWVudGl0YS1uYXYuY2xpY2snOlxuICAgICAgICAgIGlmIChwYXlsb2FkKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRUYWIgPSBwYXlsb2FkO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZU5hdlVwZGF0ZSggcGF5bG9hZCApXG4gICAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgICBwYXRoOiBbXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmdldChcInBhdGhzXCIpLmVudGl0YUJhc2VQYXRoXG4gICAgICAgICAgICAgICAgKyAnLycgK1xuICAgICAgICAgICAgICAgIHRoaXMuZW50aXR5SWRcbiAgICAgICAgICAgICAgICArICcvJyArXG4gICAgICAgICAgICAgICAgcGF5bG9hZFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2F3LWxpbmtlZC1vYmplY3RzLnBhZ2luYXRpb24nOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZSA9IHBheWxvYWQuc3BsaXQoJy0nKVsxXVxuICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICAgIHBhdGg6IFtgYXcvZW50aXRhLyR7dGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMuaWR9L29nZ2V0dGktY29sbGVnYXRpLyR7cGF5bG9hZC5zcGxpdCgnLScpWzFdfWBdXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnYXctbGlua2VkLW9iamVjdHMuZ290byc6XG4gICAgICAgICAgbGV0IHRhcmdldFBhZ2UgPSBOdW1iZXIocGF5bG9hZC5yZXBsYWNlKCdnb3RvLScsICcnKSlcbiAgICAgICAgICAvLyB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgIC8vICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgLy8gICBwYXRoOiBbYGF3L2VudGl0YS8ke3RoaXMucm91dGUuc25hcHNob3QucGFyYW1zLmlkfS9vZ2dldHRpLWNvbGxlZ2F0aS8ke3RhcmdldFBhZ2V9YF1cbiAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdhdy1saW5rZWQtb2JqZWN0cy5jaGFuZ2UnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdlU2l6ZSA9IHBheWxvYWQ7XG4gICAgICAgICAgdGhpcy5saXN0ZW5Sb3V0ZSgpIC8vIHJlbG9hZHMgdGhlIHBhZ2UgY29udGVudCB3aXRoIHRoZSBuZXcgcGFnZSBzaXplXG4gICAgICAgIGNhc2UgXCJhdy1idWJibGUtY2hhcnQuYnViYmxlLXRvb2x0aXAtZ290by1jbGlja1wiOlxuICAgICAgICAgICAgaWYoIXBheWxvYWQgfHwgIXBheWxvYWQuZW50aXR5SWQpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgICBwYXRoOiBbYGF3L2VudGl0YS8ke3BheWxvYWQuZW50aXR5SWR9L292ZXJ2aWV3YF1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pXG5cbiAgfVxuXG4gIHByaXZhdGUgbGlzdGVuUm91dGUoKSB7XG4gICAgLyoqXG4gICAgICogTGlzdGVucyB0byByb3V0aW5nIGV2ZW50cyBvZiB0aGlzIGxheW91dC5cbiAgICAgKi9cbiAgICAvLyBnZXQgVVJMIHBhcmFtZXRlcnMgd2l0aCBhbmd1bGFyJ3MgcGFyYW1NYXBcbiAgICB0aGlzLnJvdXRlLnBhcmFtTWFwLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgLy8gbG9vayBmb3IgaWRcbiAgICAgIGlmIChwYXJhbXMuZ2V0KCdpZCcpKSB7XG4gICAgICAgIC8vIGdldCBpdGVtIGZyb20gcmVzcG9uc2Ugd2l0aCBpZCA9PT0gaWQgYW5kIHJldHVybiBhcyBwcm9taXNlXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkSXRlbShwYXJhbXMuZ2V0KCdpZCcpLCBwYXJhbXMuZ2V0KCd0YWInKSkuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZENvbnRlbnQocmVzKTtcbiAgICAgICAgICAgIHJlc1snY29ubmVjdGVkRW50aXRpZXMnXSA9cmVzLmVudGl0aWVzXG4gICAgICAgICAgICBsZXQgY29ubmVjdGVkRW50aXRpZXMgPSB7c291cmNlOiByZXN9O1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5idWJibGVzRW5hYmxlZCApIHtcbiAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZpbHRlcmJ1YmJsZXJlc3BvbnNlJywgY29ubmVjdGVkRW50aXRpZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZEl0ZW0oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZE5hdmlnYXRpb24oc2VsZWN0ZWRJdGVtKSB7XG4gICAgY29uc29sZS5sb2coJ0xPQUQgTkFWSUdBVElPTicpXG4gICAgdGhpcy5kYXRhU291cmNlLmdldE5hdmlnYXRpb24oc2VsZWN0ZWRJdGVtKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZVdpZGdldHMocmVzcG9uc2UpO1xuICAgICAgfVxuICAgICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICB0aGlzLmVtaXRPdXRlcignc2VsZWN0SXRlbScsIHNlbGVjdGVkSXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxufSJdfQ==