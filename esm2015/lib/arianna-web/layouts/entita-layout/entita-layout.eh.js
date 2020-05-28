/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import helpers from '../../../common/helpers';
export class AwEntitaLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
        this.handlePageSizeChange = (/**
         * @param {?} v
         * @return {?}
         */
        (v) => {
            this.dataSource.pageSize = v;
            this.dataSource.handleNavUpdate('oggetti-collegati');
        });
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
        }));
        this.outerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'aw-bubble-chart.d3end': // bounce the event, from bubble-chart to chart-tippy
                    this.emitOuter('d3end', payload);
                    break;
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
                        // reset page
                        /** @type {?} */
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
                case 'aw-bubble-chart.bubble-tooltip-goto-click':
                    {
                        const { id, label } = payload;
                        this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [
                                this.configuration.get('paths').entitaBasePath,
                                id,
                                helpers.slugify(label),
                                'overview',
                            ],
                        });
                    }
                    break;
                case 'aw-bubble-chart.bubble-filtered':
                    if (this.dataSource.selectedTab === 'overview' || this.dataSource.selectedTab === 'entita-collegate') {
                        this.emitOuter('filterbubbleresponse', payload.relatedEntities);
                    }
                    break;
                case 'n7-smart-pagination.change':
                    this.handlePageSizeChange(payload.value);
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
    listenRoute(selectedItem = '', forceReload = false) {
        // listen for "page" query param changes
        this.route.queryParams.pipe(map((/**
         * @param {?} params
         * @return {?}
         */
        (params) => params.page))).subscribe((/**
         * @param {?} page
         * @return {?}
         */
        (page) => {
            if (this.dataSource.currentPage !== page) {
                this.dataSource.currentPage = page;
                this.dataSource.handlePageNavigation();
            }
        }));
        // get URL parameters with angular's paramMap
        this.route.paramMap.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
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
                    .pipe(
                // filter empty metadata values
                map((/**
                 * @param {?} res
                 * @return {?}
                 */
                (res) => {
                    if (res.fields) {
                        res.fields = res.fields.filter((/**
                         * @param {?} __0
                         * @return {?}
                         */
                        ({ value }) => !helpers.metadataIsEmpty(value)));
                    }
                    return res;
                })))
                    .subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                (res) => {
                    if (res) {
                        this.dataSource.loadContent(res);
                        // remove the entity of this page
                        /** @type {?} */
                        const entities = res.relatedEntities.filter((/**
                         * @param {?} entity
                         * @return {?}
                         */
                        (entity) => entity.id !== params.get('id')));
                        this.dataSource.updateWidgets(res);
                        if (selectedItem) {
                            this.emitOuter('selectItem', selectedItem);
                        }
                        this.emitOuter('filterbubbleresponse', entities);
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
    /**
     * @type {?}
     * @private
     */
    AwEntitaLayoutEH.prototype.handlePageSizeChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sT0FBTyxNQUFNLHlCQUF5QixDQUFDO0FBRTlDLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxZQUFZO0lBQWxEOztRQUNVLGVBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQXdGekMseUJBQW9COzs7O1FBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUN2RCxDQUFDLEVBQUE7SUFxREgsQ0FBQzs7OztJQXhJUSxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssdUJBQXVCO29CQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO29CQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxD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QyxDQUFDO2FBQ047aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUM1QjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGOzs7Ozs7SUFoSkMsc0NBQWlEOzs7OztJQUVqRCx5Q0FBMkI7Ozs7O0lBRTNCLGlDQUFtQjs7Ozs7SUFFbkIsb0NBQXlCOzs7OztJQWtGekIsZ0RBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi8uLi9jb21tb24vaGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBBd0VudGl0YUxheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogYW55O1xuXG4gIHByaXZhdGUgcm91dGU6IGFueTtcblxuICBwcml2YXRlIGVudGl0eUlkOiBzdHJpbmc7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctZW50aXRhLWxheW91dC5pbml0JzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xuICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcbiAgICAgICAgICB0aGlzLnJvdXRlID0gcGF5bG9hZC5yb3V0ZTtcbiAgICAgICAgICB0aGlzLmVudGl0eUlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMuaWQgfHwgJyc7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMucGFnZSB8fCAxO1xuICAgICAgICAgIHRoaXMubGlzdGVuUm91dGUodGhpcy5lbnRpdHlJZCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctZW50aXRhLWxheW91dC5kZXN0cm95JzpcbiAgICAgICAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2F3LWVudGl0YS1sYXlvdXQuc2hvd21vcmUnOlxuICAgICAgICAgIGlmIChwYXlsb2FkKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlTmF2VXBkYXRlKHBheWxvYWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5kM2VuZCc6IC8vIGJvdW5jZSB0aGUgZXZlbnQsIGZyb20gYnViYmxlLWNoYXJ0IHRvIGNoYXJ0LXRpcHB5XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2QzZW5kJywgcGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWVudGl0YS1uYXYuY2xpY2snOlxuICAgICAgICAgIGlmIChwYXlsb2FkKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRUYWIgPSBwYXlsb2FkO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZU5hdlVwZGF0ZShwYXlsb2FkKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWxpbmtlZC1vYmplY3RzLmNoYW5nZSc6IHsgLy8gY2hhbmdlZCBwYWdlIHNpemUgdmFsdWUgKHBhZ2luYXRpb24pXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2VTaXplID0gcGF5bG9hZDtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2UgPSAxOyAvLyByZXNldCBwYWdlXG4gICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbnRleHQ6IHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZFRhYixcbiAgICAgICAgICAgIGNvbmZpZzogdGhpcy5kYXRhU291cmNlLmNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICBwYWdlOiB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2UsXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB0cnVlLFxuICAgICAgICAgICAgc2l6ZTogdGhpcy5kYXRhU291cmNlLnBhZ2VTaXplLFxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUNvbXBvbmVudChcbiAgICAgICAgICAgICdhdy1saW5rZWQtb2JqZWN0cycsXG4gICAgICAgICAgICB7IGl0ZW1zOiB0aGlzLmRhdGFTb3VyY2UubXlSZXNwb25zZS5yZWxhdGVkSXRlbXMgfSxcbiAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmJ1YmJsZS10b29sdGlwLWdvdG8tY2xpY2snOiB7XG4gICAgICAgICAgY29uc3QgeyBpZCwgbGFiZWwgfSA9IHBheWxvYWQ7XG4gICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgcGF0aDogW1xuICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLmVudGl0YUJhc2VQYXRoLFxuICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgaGVscGVycy5zbHVnaWZ5KGxhYmVsKSxcbiAgICAgICAgICAgICAgJ292ZXJ2aWV3JyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5idWJibGUtZmlsdGVyZWQnOlxuICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRUYWIgPT09ICdvdmVydmlldycgfHwgdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkVGFiID09PSAnZW50aXRhLWNvbGxlZ2F0ZScpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdmaWx0ZXJidWJibGVyZXNwb25zZScsIHBheWxvYWQucmVsYXRlZEVudGl0aWVzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ243LXNtYXJ0LXBhZ2luYXRpb24uY2hhbmdlJzpcbiAgICAgICAgICB0aGlzLmhhbmRsZVBhZ2VTaXplQ2hhbmdlKHBheWxvYWQudmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQYWdlU2l6ZUNoYW5nZSA9ICh2KSA9PiB7XG4gICAgdGhpcy5kYXRhU291cmNlLnBhZ2VTaXplID0gdjtcbiAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlTmF2VXBkYXRlKCdvZ2dldHRpLWNvbGxlZ2F0aScpO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbnMgdG8gcm91dGluZyBldmVudHMgb2YgdGhpcyBsYXlvdXQuXG4gICAqL1xuICBwcml2YXRlIGxpc3RlblJvdXRlKHNlbGVjdGVkSXRlbSA9ICcnLCBmb3JjZVJlbG9hZCA9IGZhbHNlKSB7XG4gICAgLy8gbGlzdGVuIGZvciBcInBhZ2VcIiBxdWVyeSBwYXJhbSBjaGFuZ2VzXG4gICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5waXBlKFxuICAgICAgbWFwKChwYXJhbXM6IGFueSkgPT4gcGFyYW1zLnBhZ2UpLFxuICAgICkuc3Vic2NyaWJlKChwYWdlKSA9PiB7XG4gICAgICBpZiAodGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlICE9PSBwYWdlKSB7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZSA9IHBhZ2U7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVQYWdlTmF2aWdhdGlvbigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGdldCBVUkwgcGFyYW1ldGVycyB3aXRoIGFuZ3VsYXIncyBwYXJhbU1hcFxuICAgIHRoaXMucm91dGUucGFyYW1NYXAuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgIC8vIGxvb2sgZm9yIGlkXG4gICAgICBpZiAocGFyYW1zLmdldCgnaWQnKSkge1xuICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLmN1cnJlbnRJZCA9PT0gcGFyYW1zLmdldCgnaWQnKSAmJiAhZm9yY2VSZWxvYWQpIHtcbiAgICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLnNlbGVjdGVkVGFiICE9PSBwYXJhbXMuZ2V0KCd0YWInKSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZU5hdlVwZGF0ZShwYXJhbXMuZ2V0KCd0YWInKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBnZXQgaXRlbSBmcm9tIHJlc3BvbnNlIHdpdGggaWQgPT09IGlkIGFuZCByZXR1cm4gYXMgcHJvbWlzZVxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZEl0ZW0ocGFyYW1zLmdldCgnaWQnKSwgcGFyYW1zLmdldCgnc2x1ZycpLCBwYXJhbXMuZ2V0KCd0YWInKSlcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIC8vIGZpbHRlciBlbXB0eSBtZXRhZGF0YSB2YWx1ZXNcbiAgICAgICAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHJlcy5maWVsZHMpIHtcbiAgICAgICAgICAgICAgICByZXMuZmllbGRzID0gcmVzLmZpZWxkcy5maWx0ZXIoKHsgdmFsdWUgfSkgPT4gIWhlbHBlcnMubWV0YWRhdGFJc0VtcHR5KHZhbHVlKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZENvbnRlbnQocmVzKTtcbiAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBlbnRpdHkgb2YgdGhpcyBwYWdlXG4gICAgICAgICAgICAgIGNvbnN0IGVudGl0aWVzID0gcmVzLnJlbGF0ZWRFbnRpdGllcy5maWx0ZXIoKGVudGl0eSkgPT4gZW50aXR5LmlkICE9PSBwYXJhbXMuZ2V0KCdpZCcpKTtcbiAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZVdpZGdldHMocmVzKTtcbiAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdzZWxlY3RJdGVtJywgc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZmlsdGVyYnViYmxlcmVzcG9uc2UnLCBlbnRpdGllcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZEl0ZW0oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19