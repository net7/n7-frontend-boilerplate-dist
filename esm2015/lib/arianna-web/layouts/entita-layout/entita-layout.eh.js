/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/entita-layout/entita-layout.eh.ts
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
                this.dataSource.loadItem(params.get('id'), params.get('slug'), params.get('tab')).subscribe((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLE9BQU8sTUFBTSx5QkFBeUIsQ0FBQztBQUU5QyxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsWUFBWTtJQUFsRDs7UUFDVSxlQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUF3RnpDLHlCQUFvQjs7OztRQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDdkQsQ0FBQyxFQUFBO0lBMkNILENBQUM7Ozs7SUE5SFEsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHVCQUF1QjtvQkFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztvQkFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUks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O2lCQUNSO2dCQUNELDhEQUE4RDtnQkFDOUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7O2dCQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7b0JBQ2xHLElBQUksR0FBRyxFQUFFO3dCQUNQLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7OEJBRTNCLFFBQVEsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLE1BQU07Ozs7d0JBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQzt3QkFDdkYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ25DLElBQUksWUFBWSxFQUFFOzRCQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQzt5QkFDNUM7d0JBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxRQUFRLENBQUMsQ0FBQztxQkFDbEQ7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQzVCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7Ozs7OztJQXRJQyxzQ0FBaUQ7Ozs7O0lBRWpELHlDQUEyQjs7Ozs7SUFFM0IsaUNBQW1COzs7OztJQUVuQixvQ0FBeUI7Ozs7O0lBa0Z6QixnREFHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd0VudGl0YUxheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogYW55O1xyXG5cclxuICBwcml2YXRlIHJvdXRlOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgZW50aXR5SWQ6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnYXctZW50aXRhLWxheW91dC5pbml0JzpcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XHJcbiAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XHJcbiAgICAgICAgICB0aGlzLnJvdXRlID0gcGF5bG9hZC5yb3V0ZTtcclxuICAgICAgICAgIHRoaXMuZW50aXR5SWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5pZCB8fCAnJztcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZSA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLnBhZ2UgfHwgMTtcclxuICAgICAgICAgIHRoaXMubGlzdGVuUm91dGUodGhpcy5lbnRpdHlJZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnYXctZW50aXRhLWxheW91dC5kZXN0cm95JzpcclxuICAgICAgICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnYXctZW50aXRhLWxheW91dC5zaG93bW9yZSc6XHJcbiAgICAgICAgICBpZiAocGF5bG9hZCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlTmF2VXBkYXRlKHBheWxvYWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQuZDNlbmQnOiAvLyBib3VuY2UgdGhlIGV2ZW50LCBmcm9tIGJ1YmJsZS1jaGFydCB0byBjaGFydC10aXBweVxyXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2QzZW5kJywgcGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1lbnRpdGEtbmF2LmNsaWNrJzpcclxuICAgICAgICAgIGlmIChwYXlsb2FkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZFRhYiA9IHBheWxvYWQ7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVOYXZVcGRhdGUocGF5bG9hZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1saW5rZWQtb2JqZWN0cy5jaGFuZ2UnOiB7IC8vIGNoYW5nZWQgcGFnZSBzaXplIHZhbHVlIChwYWdpbmF0aW9uKVxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2VTaXplID0gcGF5bG9hZDtcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZSA9IDE7IC8vIHJlc2V0IHBhZ2VcclxuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQ6IHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZFRhYixcclxuICAgICAgICAgICAgY29uZmlnOiB0aGlzLmRhdGFTb3VyY2UuY29uZmlndXJhdGlvbixcclxuICAgICAgICAgICAgcGFnZTogdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlLFxyXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICBzaXplOiB0aGlzLmRhdGFTb3VyY2UucGFnZVNpemUsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUNvbXBvbmVudChcclxuICAgICAgICAgICAgJ2F3LWxpbmtlZC1vYmplY3RzJyxcclxuICAgICAgICAgICAgeyBpdGVtczogdGhpcy5kYXRhU291cmNlLm15UmVzcG9uc2UucmVsYXRlZEl0ZW1zIH0sXHJcbiAgICAgICAgICAgIG9wdGlvbnMsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmJ1YmJsZS10b29sdGlwLWdvdG8tY2xpY2snOiB7XHJcbiAgICAgICAgICBjb25zdCB7IGlkLCBsYWJlbCB9ID0gcGF5bG9hZDtcclxuICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XHJcbiAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxyXG4gICAgICAgICAgICBwYXRoOiBbXHJcbiAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aCxcclxuICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICBoZWxwZXJzLnNsdWdpZnkobGFiZWwpLFxyXG4gICAgICAgICAgICAgICdvdmVydmlldycsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5idWJibGUtZmlsdGVyZWQnOlxyXG4gICAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZFRhYiA9PT0gJ292ZXJ2aWV3JyB8fCB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRUYWIgPT09ICdlbnRpdGEtY29sbGVnYXRlJykge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZmlsdGVyYnViYmxlcmVzcG9uc2UnLCBwYXlsb2FkLnJlbGF0ZWRFbnRpdGllcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICduNy1zbWFydC1wYWdpbmF0aW9uLmNoYW5nZSc6XHJcbiAgICAgICAgICB0aGlzLmhhbmRsZVBhZ2VTaXplQ2hhbmdlKHBheWxvYWQudmFsdWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlUGFnZVNpemVDaGFuZ2UgPSAodikgPT4ge1xyXG4gICAgdGhpcy5kYXRhU291cmNlLnBhZ2VTaXplID0gdjtcclxuICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVOYXZVcGRhdGUoJ29nZ2V0dGktY29sbGVnYXRpJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMaXN0ZW5zIHRvIHJvdXRpbmcgZXZlbnRzIG9mIHRoaXMgbGF5b3V0LlxyXG4gICAqL1xyXG4gIHByaXZhdGUgbGlzdGVuUm91dGUoc2VsZWN0ZWRJdGVtID0gJycsIGZvcmNlUmVsb2FkID0gZmFsc2UpIHtcclxuICAgIC8vIGxpc3RlbiBmb3IgXCJwYWdlXCIgcXVlcnkgcGFyYW0gY2hhbmdlc1xyXG4gICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5waXBlKFxyXG4gICAgICBtYXAoKHBhcmFtczogYW55KSA9PiBwYXJhbXMucGFnZSksXHJcbiAgICApLnN1YnNjcmliZSgocGFnZSkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlICE9PSBwYWdlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlID0gcGFnZTtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlUGFnZU5hdmlnYXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBnZXQgVVJMIHBhcmFtZXRlcnMgd2l0aCBhbmd1bGFyJ3MgcGFyYW1NYXBcclxuICAgIHRoaXMucm91dGUucGFyYW1NYXAuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcclxuICAgICAgLy8gbG9vayBmb3IgaWRcclxuICAgICAgaWYgKHBhcmFtcy5nZXQoJ2lkJykpIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLmN1cnJlbnRJZCA9PT0gcGFyYW1zLmdldCgnaWQnKSAmJiAhZm9yY2VSZWxvYWQpIHtcclxuICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRUYWIgIT09IHBhcmFtcy5nZXQoJ3RhYicpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVOYXZVcGRhdGUocGFyYW1zLmdldCgndGFiJykpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBnZXQgaXRlbSBmcm9tIHJlc3BvbnNlIHdpdGggaWQgPT09IGlkIGFuZCByZXR1cm4gYXMgcHJvbWlzZVxyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkSXRlbShwYXJhbXMuZ2V0KCdpZCcpLCBwYXJhbXMuZ2V0KCdzbHVnJyksIHBhcmFtcy5nZXQoJ3RhYicpKS5zdWJzY3JpYmUoKHJlcykgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZENvbnRlbnQocmVzKTtcclxuICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBlbnRpdHkgb2YgdGhpcyBwYWdlXHJcbiAgICAgICAgICAgIGNvbnN0IGVudGl0aWVzID0gcmVzLnJlbGF0ZWRFbnRpdGllcy5maWx0ZXIoKGVudGl0eSkgPT4gZW50aXR5LmlkICE9PSBwYXJhbXMuZ2V0KCdpZCcpKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZVdpZGdldHMocmVzKTtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkSXRlbSkge1xyXG4gICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdzZWxlY3RJdGVtJywgc2VsZWN0ZWRJdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZmlsdGVyYnViYmxlcmVzcG9uc2UnLCBlbnRpdGllcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmxvYWRJdGVtKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=