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
                        if (this.dataSource.bubblesEnabled && params.get('tab') === 'entita-collegate') {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFlBQVk7SUFBbEQ7O1FBQ1UsZUFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBaUluRCxDQUFDOzs7OztJQTNIUSxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssdUJBQXVCO29CQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO29CQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7b0JBQ3BELElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO29CQUNwRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxD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O2dCQUNaLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3pDO1lBQ0QsSUFBSSxZQUFZLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO2FBQzVDO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0NBRUY7Ozs7OztJQWpJQyxzQ0FBaUQ7Ozs7O0lBQ2pELHlDQUEyQjs7Ozs7SUFDM0IsaUNBQW1COzs7OztJQUNuQixvQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBBd0VudGl0YUxheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IGFueTtcbiAgcHJpdmF0ZSByb3V0ZTogYW55O1xuICBwcml2YXRlIGVudGl0eUlkOiBzdHJpbmc7XG4gIC8vIHByaXZhdGUgc2VsZWN0ZWRUYWI6IHN0cmluZztcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1lbnRpdGEtbGF5b3V0LmluaXQnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xuICAgICAgICAgIHRoaXMucm91dGUgPSBwYXlsb2FkLnJvdXRlO1xuICAgICAgICAgIHRoaXMuZW50aXR5SWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5pZCB8fCBcIlwiO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZSA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLnBhZ2UgfHwgJyc7XG4gICAgICAgICAgdGhpcy5saXN0ZW5Sb3V0ZSgpO1xuICAgICAgICAgIHRoaXMubG9hZE5hdmlnYXRpb24odGhpcy5lbnRpdHlJZCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctZW50aXRhLWxheW91dC5kZXN0cm95JzpcbiAgICAgICAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2F3LWVudGl0YS1sYXlvdXQuc2hvd21vcmUnOlxuICAgICAgICAgIGlmIChwYXlsb2FkKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgICBwYXRoOiBbXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmdldChcInBhdGhzXCIpLmVudGl0YUJhc2VQYXRoXG4gICAgICAgICAgICAgICAgKyAnLycgK1xuICAgICAgICAgICAgICAgIHRoaXMuZW50aXR5SWRcbiAgICAgICAgICAgICAgICArICcvJyArXG4gICAgICAgICAgICAgICAgcGF5bG9hZFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctZW50aXRhLW5hdi5jbGljayc6XG4gICAgICAgICAgaWYgKHBheWxvYWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZFRhYiA9IHBheWxvYWQ7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlTmF2VXBkYXRlKCBwYXlsb2FkIClcbiAgICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICAgIHBhdGg6IFtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwicGF0aHNcIikuZW50aXRhQmFzZVBhdGhcbiAgICAgICAgICAgICAgICArICcvJyArXG4gICAgICAgICAgICAgICAgdGhpcy5lbnRpdHlJZFxuICAgICAgICAgICAgICAgICsgJy8nICtcbiAgICAgICAgICAgICAgICBwYXlsb2FkXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnYXctbGlua2VkLW9iamVjdHMucGFnaW5hdGlvbic6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlID0gcGF5bG9hZC5zcGxpdCgnLScpWzFdXG4gICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgcGF0aDogW2Bhdy9lbnRpdGEvJHt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5pZH0vb2dnZXR0aS1jb2xsZWdhdGkvJHtwYXlsb2FkLnNwbGl0KCctJylbMV19YF1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdhdy1saW5rZWQtb2JqZWN0cy5nb3RvJzpcbiAgICAgICAgICBsZXQgdGFyZ2V0UGFnZSA9IE51bWJlcihwYXlsb2FkLnJlcGxhY2UoJ2dvdG8tJywgJycpKVxuICAgICAgICAgIC8vIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgLy8gICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICAvLyAgIHBhdGg6IFtgYXcvZW50aXRhLyR7dGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMuaWR9L29nZ2V0dGktY29sbGVnYXRpLyR7dGFyZ2V0UGFnZX1gXVxuICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2F3LWxpbmtlZC1vYmplY3RzLmNoYW5nZSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2VTaXplID0gcGF5bG9hZDtcbiAgICAgICAgICB0aGlzLmxpc3RlblJvdXRlKCkgLy8gcmVsb2FkcyB0aGUgcGFnZSBjb250ZW50IHdpdGggdGhlIG5ldyBwYWdlIHNpemVcbiAgICAgICAgY2FzZSBcImF3LWJ1YmJsZS1jaGFydC5idWJibGUtdG9vbHRpcC1nb3RvLWNsaWNrXCI6XG4gICAgICAgICAgICBpZighcGF5bG9hZCB8fCAhcGF5bG9hZC5lbnRpdHlJZCkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICAgIHBhdGg6IFtgYXcvZW50aXRhLyR7cGF5bG9hZC5lbnRpdHlJZH0vb3ZlcnZpZXdgXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSlcblxuICB9XG5cbiAgcHJpdmF0ZSBsaXN0ZW5Sb3V0ZSgpIHtcbiAgICAvKipcbiAgICAgKiBMaXN0ZW5zIHRvIHJvdXRpbmcgZXZlbnRzIG9mIHRoaXMgbGF5b3V0LlxuICAgICAqL1xuICAgIC8vIGdldCBVUkwgcGFyYW1ldGVycyB3aXRoIGFuZ3VsYXIncyBwYXJhbU1hcFxuICAgIHRoaXMucm91dGUucGFyYW1NYXAuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAvLyBsb29rIGZvciBpZFxuICAgICAgaWYgKHBhcmFtcy5nZXQoJ2lkJykpIHtcbiAgICAgICAgLy8gZ2V0IGl0ZW0gZnJvbSByZXNwb25zZSB3aXRoIGlkID09PSBpZCBhbmQgcmV0dXJuIGFzIHByb21pc2VcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmxvYWRJdGVtKHBhcmFtcy5nZXQoJ2lkJyksIHBhcmFtcy5nZXQoJ3RhYicpKS5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkQ29udGVudChyZXMpO1xuICAgICAgICAgICAgcmVzWydjb25uZWN0ZWRFbnRpdGllcyddID1yZXMuZW50aXRpZXNcbiAgICAgICAgICAgIGxldCBjb25uZWN0ZWRFbnRpdGllcyA9IHtzb3VyY2U6IHJlc307XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLmJ1YmJsZXNFbmFibGVkICYmIHBhcmFtcy5nZXQoJ3RhYicpID09PSAnZW50aXRhLWNvbGxlZ2F0ZScpIHtcbiAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZpbHRlcmJ1YmJsZXJlc3BvbnNlJywgY29ubmVjdGVkRW50aXRpZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZEl0ZW0oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZE5hdmlnYXRpb24oc2VsZWN0ZWRJdGVtKSB7XG4gICAgY29uc29sZS5sb2coJ0xPQUQgTkFWSUdBVElPTicpXG4gICAgdGhpcy5kYXRhU291cmNlLmdldE5hdmlnYXRpb24oc2VsZWN0ZWRJdGVtKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZVdpZGdldHMocmVzcG9uc2UpO1xuICAgICAgfVxuICAgICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICB0aGlzLmVtaXRPdXRlcignc2VsZWN0SXRlbScsIHNlbGVjdGVkSXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxufSJdfQ==