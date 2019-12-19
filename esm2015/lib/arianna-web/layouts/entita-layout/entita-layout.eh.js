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
                        // this.dataSource.updateComponent(
                        //   'aw-entita-metadata-viewer',
                        //   this.dataSource.myResponse.fields,
                        //   { 
                        //     context: this.dataSource.selectedTab,
                        //     config: this.dataSource.configuration,
                        //     labels: this.dataSource.configuration.get("labels")
                        //   }
                        // )
                    }
                    break;
                case 'aw-linked-objects.pagination':
                    console.log(payload);
                    this.dataSource.currentPage = +payload.split('-')[1];
                    this.dataSource.handlePageNavigation();
                    /*this.emitGlobal('navigate', {
                      handler: 'router',
                      path: [`aw/entita/${this.route.snapshot.params.id}/oggetti-collegati/${payload.split('-')[1]}`]
                    });*/
                    break;
                case 'aw-linked-objects.goto':
                    console.log(payload);
                    this.dataSource.currentPage = +payload.replace('goto-', '');
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
                    break;
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
                        this.emitOuter('filterbubbleresponse', payload.relatedEntities);
                        //this.dataSource.updateBubbes(payload);
                    }
                    break;
                case 'aw-linked-objects.click':
                    /** @type {?} */
                    const paths = this.configuration.get('paths');
                    this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [payload.type == undefined ? paths.schedaBasePath : paths.entitaBasePath, payload.id]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFlBQVk7SUFBbEQ7O1FBQ1UsZUFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBc0puRCxDQUFDOzs7OztJQWhKUSxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssdUJBQXVCO29CQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO29CQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7b0JBQ3BELElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO29CQUNuRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDaEMscUNBQXFDO29CQUNyQyxNQUFNO2dC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cm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBBd0VudGl0YUxheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IGFueTtcbiAgcHJpdmF0ZSByb3V0ZTogYW55O1xuICBwcml2YXRlIGVudGl0eUlkOiBzdHJpbmc7XG4gIC8vIHByaXZhdGUgc2VsZWN0ZWRUYWI6IHN0cmluZztcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1lbnRpdGEtbGF5b3V0LmluaXQnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xuICAgICAgICAgIHRoaXMucm91dGUgPSBwYXlsb2FkLnJvdXRlO1xuICAgICAgICAgIHRoaXMuZW50aXR5SWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5pZCB8fCBcIlwiO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZSA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLnBhZ2UgfHwgMTtcbiAgICAgICAgICB0aGlzLmxpc3RlblJvdXRlKHRoaXMuZW50aXR5SWQpO1xuICAgICAgICAgIC8vdGhpcy5sb2FkTmF2aWdhdGlvbih0aGlzLmVudGl0eUlkKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdhdy1lbnRpdGEtbGF5b3V0LmRlc3Ryb3knOlxuICAgICAgICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctZW50aXRhLWxheW91dC5zaG93bW9yZSc6XG4gICAgICAgICAgaWYgKHBheWxvYWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVOYXZVcGRhdGUocGF5bG9hZClcbiAgICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICAgIHBhdGg6IFtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwicGF0aHNcIikuZW50aXRhQmFzZVBhdGhcbiAgICAgICAgICAgICAgICArICcvJyArXG4gICAgICAgICAgICAgICAgdGhpcy5lbnRpdHlJZFxuICAgICAgICAgICAgICAgICsgJy8nICtcbiAgICAgICAgICAgICAgICBwYXlsb2FkXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1lbnRpdGEtbmF2LmNsaWNrJzpcbiAgICAgICAgICBpZiAocGF5bG9hZCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkVGFiID0gcGF5bG9hZDtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVOYXZVcGRhdGUocGF5bG9hZClcbiAgICAgICAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVDb21wb25lbnQoXG4gICAgICAgICAgICAvLyAgICdhdy1lbnRpdGEtbWV0YWRhdGEtdmlld2VyJyxcbiAgICAgICAgICAgIC8vICAgdGhpcy5kYXRhU291cmNlLm15UmVzcG9uc2UuZmllbGRzLFxuICAgICAgICAgICAgLy8gICB7IFxuICAgICAgICAgICAgLy8gICAgIGNvbnRleHQ6IHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZFRhYixcbiAgICAgICAgICAgIC8vICAgICBjb25maWc6IHRoaXMuZGF0YVNvdXJjZS5jb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgLy8gICAgIGxhYmVsczogdGhpcy5kYXRhU291cmNlLmNvbmZpZ3VyYXRpb24uZ2V0KFwibGFiZWxzXCIpXG4gICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgIC8vIClcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWxpbmtlZC1vYmplY3RzLnBhZ2luYXRpb24nOlxuICAgICAgICAgIGNvbnNvbGUubG9nKHBheWxvYWQpXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlID0gK3BheWxvYWQuc3BsaXQoJy0nKVsxXTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlUGFnZU5hdmlnYXRpb24oKVxuICAgICAgICAgIC8qdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgcGF0aDogW2Bhdy9lbnRpdGEvJHt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5pZH0vb2dnZXR0aS1jb2xsZWdhdGkvJHtwYXlsb2FkLnNwbGl0KCctJylbMV19YF1cbiAgICAgICAgICB9KTsqL1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2F3LWxpbmtlZC1vYmplY3RzLmdvdG8nOlxuICAgICAgICAgIGNvbnNvbGUubG9nKHBheWxvYWQpXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlID0gK3BheWxvYWQucmVwbGFjZSgnZ290by0nLCAnJylcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlUGFnZU5hdmlnYXRpb24oKVxuICAgICAgICAgIC8vIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgLy8gICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICAvLyAgIHBhdGg6IFtgYXcvZW50aXRhLyR7dGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMuaWR9L29nZ2V0dGktY29sbGVnYXRpLyR7dGFyZ2V0UGFnZX1gXVxuICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2F3LWxpbmtlZC1vYmplY3RzLmNoYW5nZSc6IC8vIGNoYW5nZWQgcGFnZSBzaXplIHZhbHVlIChwYWdpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdlU2l6ZSA9IHBheWxvYWQ7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlID0gMSAvLyByZXNldCBwYWdlXG4gICAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb250ZXh0OiB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRUYWIsXG4gICAgICAgICAgICBjb25maWc6IHRoaXMuZGF0YVNvdXJjZS5jb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgcGFnZTogdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlLFxuICAgICAgICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgIHNpemU6IHRoaXMuZGF0YVNvdXJjZS5wYWdlU2l6ZSxcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUNvbXBvbmVudChcbiAgICAgICAgICAgICdhdy1saW5rZWQtb2JqZWN0cycsXG4gICAgICAgICAgICB7IGl0ZW1zOiB0aGlzLmRhdGFTb3VyY2UubXlSZXNwb25zZS5yZWxhdGVkSXRlbXMgfSxcbiAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgICApXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJhdy1idWJibGUtY2hhcnQuYnViYmxlLXRvb2x0aXAtZ290by1jbGlja1wiOlxuICAgICAgICAgIGlmICghcGF5bG9hZCB8fCAhcGF5bG9hZC5lbnRpdHlJZCkgcmV0dXJuO1xuICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICAgIHBhdGg6IFtgYXcvZW50aXRhLyR7cGF5bG9hZC5lbnRpdHlJZH1gXVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQuYnViYmxlLWZpbHRlcmVkJzpcbiAgICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLnNlbGVjdGVkVGFiID09IFwib3ZlcnZpZXdcIiB8fCB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRUYWIgPT0gXCJlbnRpdGEtY29sbGVnYXRlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdmaWx0ZXJidWJibGVyZXNwb25zZScsIHBheWxvYWQucmVsYXRlZEVudGl0aWVzKTtcbiAgICAgICAgICAgIC8vdGhpcy5kYXRhU291cmNlLnVwZGF0ZUJ1YmJlcyhwYXlsb2FkKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWxpbmtlZC1vYmplY3RzLmNsaWNrJzpcbiAgICAgICAgICBjb25zdCBwYXRocyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJyk7XG4gICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgcGF0aDogW3BheWxvYWQudHlwZSA9PSB1bmRlZmluZWQgPyBwYXRocy5zY2hlZGFCYXNlUGF0aCA6IHBhdGhzLmVudGl0YUJhc2VQYXRoLCBwYXlsb2FkLmlkXVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pXG5cbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIHRvIHJvdXRpbmcgZXZlbnRzIG9mIHRoaXMgbGF5b3V0LlxuICAgKi9cbiAgcHJpdmF0ZSBsaXN0ZW5Sb3V0ZShzZWxlY3RlZEl0ZW0gPSBcIlwiLCBmb3JjZVJlbG9hZCA9IGZhbHNlKSB7XG4gICAgLy8gZ2V0IFVSTCBwYXJhbWV0ZXJzIHdpdGggYW5ndWxhcidzIHBhcmFtTWFwXG4gICAgdGhpcy5yb3V0ZS5wYXJhbU1hcC5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgIC8vIGxvb2sgZm9yIGlkXG4gICAgICBpZiAocGFyYW1zLmdldCgnaWQnKSkge1xuICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLmN1cnJlbnRJZCA9PSBwYXJhbXMuZ2V0KCdpZCcpICYmICFmb3JjZVJlbG9hZCkgcmV0dXJuO1xuICAgICAgICAvLyBnZXQgaXRlbSBmcm9tIHJlc3BvbnNlIHdpdGggaWQgPT09IGlkIGFuZCByZXR1cm4gYXMgcHJvbWlzZVxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZEl0ZW0ocGFyYW1zLmdldCgnaWQnKSwgcGFyYW1zLmdldCgndGFiJykpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkQ29udGVudChyZXMpO1xuICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBlbnRpdHkgb2YgdGhpcyBwYWdlXG4gICAgICAgICAgICBsZXQgZW50aXRpZXMgPSByZXMucmVsYXRlZEVudGl0aWVzLmZpbHRlcihlbnRpdHkgPT4gZW50aXR5LmlkICE9PSBwYXJhbXMuZ2V0KCdpZCcpKVxuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZpbHRlcmJ1YmJsZXJlc3BvbnNlJywgZW50aXRpZXMpO1xuXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlV2lkZ2V0cyhyZXMpO1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignc2VsZWN0SXRlbScsIHNlbGVjdGVkSXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkSXRlbSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59Il19