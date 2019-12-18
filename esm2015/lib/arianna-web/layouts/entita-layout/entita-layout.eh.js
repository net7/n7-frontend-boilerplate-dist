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
                    this.dataSource.currentPage = this.route.snapshot.params.page || 1;
                    this.listenRoute(this.entityId);
                    //this.loadNavigation(this.entityId);
                    break;
                case 'aw-entita-layout.destroy':
                    this.destroyed$.next();
                    break;
                case 'aw-entita-layout.showmore':
                    if (payload) {
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
                    }
                    break;
                case 'aw-linked-objects.pagination':
                    this.dataSource.currentPage = payload.split('-')[1];
                    this.dataSource.handlePageNavigation();
                    /*this.emitGlobal('navigate', {
                      handler: 'router',
                      path: [`aw/entita/${this.route.snapshot.params.id}/oggetti-collegati/${payload.split('-')[1]}`]
                    });*/
                    break;
                case 'aw-linked-objects.goto':
                    this.dataSource.currentPage = Number(payload.replace('goto-', ''));
                    this.dataSource.handlePageNavigation();
                    // this.emitGlobal('navigate', {
                    //   handler: 'router',
                    //   path: [`aw/entita/${this.route.snapshot.params.id}/oggetti-collegati/${targetPage}`]
                    // });
                    break;
                case 'aw-linked-objects.change': // changed page size value (pagination)
                    this.dataSource.pageSize = payload;
                    this.dataSource.currentPage = 1; // reset page
                    // reset page
                    /** @type {?} */
                    let options = {
                        context: this.dataSource.selectedTab,
                        config: this.dataSource.configuration,
                        page: this.dataSource.currentPage,
                        pagination: true,
                        size: this.dataSource.pageSize,
                    };
                    this.dataSource.updateComponent('aw-linked-objects', { items: this.dataSource.myResponse.relatedItems }, options);
                // this.listenRoute("", true) // reloads the page content with the new page size
                case "aw-bubble-chart.bubble-tooltip-goto-click":
                    if (!payload || !payload.entityId)
                        return;
                    this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [`aw/entita/${payload.entityId}`]
                    });
                    break;
                case 'aw-bubble-chart.bubble-filtered':
                    if (this.dataSource.selectedTab == "overview" || this.dataSource.selectedTab == "entita-collegate") {
                        console.log('filter bubble response', { payload });
                        this.emitOuter('filterbubbleresponse', payload.relatedEntities);
                        //this.dataSource.updateBubbes(payload);
                    }
                    break;
                case 'aw-linked-objects.click':
                    /** @type {?} */
                    const paths = this.configuration.get('paths');
                    this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [paths.schedaBasePath, payload]
                    });
                    break;
                default:
                    break;
            }
        }));
    }
    /**
     * Listens to routing events of this layout.
     * @private
     * @param {?=} selectedItem
     * @param {?=} forceReload
     * @return {?}
     */
    listenRoute(selectedItem = "", forceReload = false) {
        // get URL parameters with angular's paramMap
        this.route.paramMap.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            // look for id
            if (params.get('id')) {
                if (this.dataSource.currentId == params.get('id') && !forceReload)
                    return;
                // get item from response with id === id and return as promise
                this.dataSource.loadItem(params.get('id'), params.get('tab')).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                res => {
                    if (res) {
                        this.dataSource.loadContent(res);
                        // remove the entity of this page
                        /** @type {?} */
                        let entities = res.relatedEntities.filter((/**
                         * @param {?} entity
                         * @return {?}
                         */
                        entity => entity.id !== params.get('id')));
                        this.emitOuter('filterbubbleresponse', entities);
                        this.dataSource.updateWidgets(res);
                        if (selectedItem) {
                            this.emitOuter('selectItem', selectedItem);
                        }
                    }
                }));
            }
            else {
                this.dataSource.loadItem();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFlBQVk7SUFBbEQ7O1FBQ1UsZUFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBNEluRCxDQUFDOzs7OztJQXRJUSxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssdUJBQXVCO29CQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO29CQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7b0JBQ3BELElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO29CQUNuRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDaEMscUNBQXFDO29CQUNyQyxNQUFNO2dC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TUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVM7Ozs7Z0JBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQzVFLElBQUksR0FBRyxFQUFFO3dCQUNQLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7NEJBRTdCLFFBQVEsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLE1BQU07Ozs7d0JBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUM7d0JBQ25GLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEVBQUUsUUFBUSxDQUFDLENBQUM7d0JBRWpELElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNuQyxJQUFJLFlBQVksRUFBRTs0QkFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7eUJBQzVDO3FCQUNGO2dCQUNILENBQUMsRUFBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUM1QjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGOzs7Ozs7SUE1SUMsc0NBQWlEOzs7OztJQUNqRCx5Q0FBMkI7Ozs7O0lBQzNCLGlDQUFtQjs7Ozs7SUFDbkIsb0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY2xhc3MgQXdFbnRpdGFMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBhbnk7XG4gIHByaXZhdGUgcm91dGU6IGFueTtcbiAgcHJpdmF0ZSBlbnRpdHlJZDogc3RyaW5nO1xuICAvLyBwcml2YXRlIHNlbGVjdGVkVGFiOiBzdHJpbmc7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctZW50aXRhLWxheW91dC5pbml0JzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xuICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcbiAgICAgICAgICB0aGlzLnJvdXRlID0gcGF5bG9hZC5yb3V0ZTtcbiAgICAgICAgICB0aGlzLmVudGl0eUlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMuaWQgfHwgXCJcIjtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2UgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5wYWdlIHx8IDE7XG4gICAgICAgICAgdGhpcy5saXN0ZW5Sb3V0ZSh0aGlzLmVudGl0eUlkKTtcbiAgICAgICAgICAvL3RoaXMubG9hZE5hdmlnYXRpb24odGhpcy5lbnRpdHlJZCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctZW50aXRhLWxheW91dC5kZXN0cm95JzpcbiAgICAgICAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2F3LWVudGl0YS1sYXlvdXQuc2hvd21vcmUnOlxuICAgICAgICAgIGlmIChwYXlsb2FkKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlTmF2VXBkYXRlKHBheWxvYWQpXG4gICAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgICBwYXRoOiBbXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmdldChcInBhdGhzXCIpLmVudGl0YUJhc2VQYXRoXG4gICAgICAgICAgICAgICAgKyAnLycgK1xuICAgICAgICAgICAgICAgIHRoaXMuZW50aXR5SWRcbiAgICAgICAgICAgICAgICArICcvJyArXG4gICAgICAgICAgICAgICAgcGF5bG9hZFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctZW50aXRhLW5hdi5jbGljayc6XG4gICAgICAgICAgaWYgKHBheWxvYWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZFRhYiA9IHBheWxvYWQ7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlTmF2VXBkYXRlKHBheWxvYWQpXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1saW5rZWQtb2JqZWN0cy5wYWdpbmF0aW9uJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2UgPSBwYXlsb2FkLnNwbGl0KCctJylbMV07XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZVBhZ2VOYXZpZ2F0aW9uKClcbiAgICAgICAgICAvKnRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICAgIHBhdGg6IFtgYXcvZW50aXRhLyR7dGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMuaWR9L29nZ2V0dGktY29sbGVnYXRpLyR7cGF5bG9hZC5zcGxpdCgnLScpWzFdfWBdXG4gICAgICAgICAgfSk7Ki9cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdhdy1saW5rZWQtb2JqZWN0cy5nb3RvJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2UgPSBOdW1iZXIocGF5bG9hZC5yZXBsYWNlKCdnb3RvLScsICcnKSlcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlUGFnZU5hdmlnYXRpb24oKVxuICAgICAgICAgIC8vIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgLy8gICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICAvLyAgIHBhdGg6IFtgYXcvZW50aXRhLyR7dGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMuaWR9L29nZ2V0dGktY29sbGVnYXRpLyR7dGFyZ2V0UGFnZX1gXVxuICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2F3LWxpbmtlZC1vYmplY3RzLmNoYW5nZSc6IC8vIGNoYW5nZWQgcGFnZSBzaXplIHZhbHVlIChwYWdpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdlU2l6ZSA9IHBheWxvYWQ7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlID0gMSAvLyByZXNldCBwYWdlXG4gICAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb250ZXh0OiB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRUYWIsXG4gICAgICAgICAgICBjb25maWc6IHRoaXMuZGF0YVNvdXJjZS5jb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgcGFnZTogdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlLFxuICAgICAgICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgIHNpemU6IHRoaXMuZGF0YVNvdXJjZS5wYWdlU2l6ZSxcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUNvbXBvbmVudChcbiAgICAgICAgICAgICdhdy1saW5rZWQtb2JqZWN0cycsXG4gICAgICAgICAgICB7IGl0ZW1zOiB0aGlzLmRhdGFTb3VyY2UubXlSZXNwb25zZS5yZWxhdGVkSXRlbXMgfSxcbiAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgICApXG4gICAgICAgIC8vIHRoaXMubGlzdGVuUm91dGUoXCJcIiwgdHJ1ZSkgLy8gcmVsb2FkcyB0aGUgcGFnZSBjb250ZW50IHdpdGggdGhlIG5ldyBwYWdlIHNpemVcbiAgICAgICAgY2FzZSBcImF3LWJ1YmJsZS1jaGFydC5idWJibGUtdG9vbHRpcC1nb3RvLWNsaWNrXCI6XG4gICAgICAgICAgaWYgKCFwYXlsb2FkIHx8ICFwYXlsb2FkLmVudGl0eUlkKSByZXR1cm47XG4gICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgcGF0aDogW2Bhdy9lbnRpdGEvJHtwYXlsb2FkLmVudGl0eUlkfWBdXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5idWJibGUtZmlsdGVyZWQnOlxuICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRUYWIgPT0gXCJvdmVydmlld1wiIHx8IHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZFRhYiA9PSBcImVudGl0YS1jb2xsZWdhdGVcIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZpbHRlciBidWJibGUgcmVzcG9uc2UnLCB7cGF5bG9hZH0pXG4gICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZmlsdGVyYnViYmxlcmVzcG9uc2UnLCBwYXlsb2FkLnJlbGF0ZWRFbnRpdGllcyk7XG4gICAgICAgICAgICAvL3RoaXMuZGF0YVNvdXJjZS51cGRhdGVCdWJiZXMocGF5bG9hZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1saW5rZWQtb2JqZWN0cy5jbGljayc6XG4gICAgICAgICAgY29uc3QgcGF0aHMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpO1xuICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICAgIHBhdGg6IFtwYXRocy5zY2hlZGFCYXNlUGF0aCwgcGF5bG9hZF1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KVxuXG4gIH1cblxuICAvKipcbiAgICogTGlzdGVucyB0byByb3V0aW5nIGV2ZW50cyBvZiB0aGlzIGxheW91dC5cbiAgICovXG4gIHByaXZhdGUgbGlzdGVuUm91dGUoc2VsZWN0ZWRJdGVtID0gXCJcIiwgZm9yY2VSZWxvYWQgPSBmYWxzZSkge1xuICAgIC8vIGdldCBVUkwgcGFyYW1ldGVycyB3aXRoIGFuZ3VsYXIncyBwYXJhbU1hcFxuICAgIHRoaXMucm91dGUucGFyYW1NYXAuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAvLyBsb29rIGZvciBpZFxuICAgICAgaWYgKHBhcmFtcy5nZXQoJ2lkJykpIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50SWQgPT0gcGFyYW1zLmdldCgnaWQnKSAmJiAhZm9yY2VSZWxvYWQpIHJldHVybjtcbiAgICAgICAgLy8gZ2V0IGl0ZW0gZnJvbSByZXNwb25zZSB3aXRoIGlkID09PSBpZCBhbmQgcmV0dXJuIGFzIHByb21pc2VcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmxvYWRJdGVtKHBhcmFtcy5nZXQoJ2lkJyksIHBhcmFtcy5nZXQoJ3RhYicpKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZENvbnRlbnQocmVzKTtcbiAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgZW50aXR5IG9mIHRoaXMgcGFnZVxuICAgICAgICAgICAgbGV0IGVudGl0aWVzID0gcmVzLnJlbGF0ZWRFbnRpdGllcy5maWx0ZXIoZW50aXR5ID0+IGVudGl0eS5pZCAhPT0gcGFyYW1zLmdldCgnaWQnKSlcbiAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdmaWx0ZXJidWJibGVyZXNwb25zZScsIGVudGl0aWVzKTtcblxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZVdpZGdldHMocmVzKTtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3NlbGVjdEl0ZW0nLCBzZWxlY3RlZEl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZEl0ZW0oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSJdfQ==