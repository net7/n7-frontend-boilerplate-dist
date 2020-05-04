/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/scheda-layout/scheda-layout.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import helpers from '../../../common/helpers';
export class AwSchedaLayoutEH extends EventHandler {
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
                    {
                        this.dataSource.onInit(payload);
                        this.configuration = payload.configuration;
                        this.route = payload.route;
                        /** @type {?} */
                        const paramId = this.route.snapshot.params.id || '';
                        if (paramId) {
                            this.dataSource.currentId = paramId;
                        }
                        this.listenRoute();
                        this.loadNavigation(paramId);
                        this.emitOuter('viewleaf');
                    }
                    break;
                case 'aw-scheda-layout.destroy':
                    this.destroyed$.next();
                    this.dataSource.onDestroy();
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
                case 'aw-sidebar-header.click':
                    this.dataSource.collapseSidebar();
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
        this.route.paramMap.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
            /** @type {?} */
            const paramId = params.get('id');
            if (paramId) {
                if (paramId) {
                    this.dataSource.currentId = paramId;
                    this.emitOuter('routechanged', paramId);
                }
                this.dataSource.contentIsLoading = true;
                this.dataSource.loadItem(paramId).subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                (response) => {
                    this.dataSource.contentIsLoading = false;
                    if (response) {
                        this.dataSource.loadContent(response);
                        if (Array.isArray(response.relatedEntities) && response.relatedEntities.length) {
                            if (this.dataSource.bubblesEnabled) {
                                response.relatedEntities.forEach((/**
                                 * @param {?} el
                                 * @return {?}
                                 */
                                (el) => {
                                    el.entity.relationName = response.label.length > 30
                                        ? `${response.label.substr(0, 30)}... `
                                        : response.label;
                                }));
                                this.emitOuter('filterbubbleresponse', response.relatedEntities);
                            }
                        }
                    }
                }));
            }
        }));
    }
    /**
     * @private
     * @param {?} selectedItem
     * @return {?}
     */
    loadNavigation(selectedItem) {
        this.dataSource.updateNavigation('Loading...');
        this.dataSource.getNavigation('patrimonio').subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            if (response) {
                this.dataSource.setTree(response);
                this.dataSource.updateNavigation(this.dataSource.getTree().label);
                this.emitOuter('navigationresponse', {
                    tree: this.dataSource.getTree(),
                    currentItem: selectedItem,
                    basePath: this.configuration.get('paths').schedaBasePath,
                });
            }
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwSchedaLayoutEH.prototype.destroyed$;
    /**
     * @type {?}
     * @private
     */
    AwSchedaLayoutEH.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    AwSchedaLayoutEH.prototype.route;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sT0FBTyxNQUFNLHlCQUF5QixDQUFDO0FBRTlDLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxZQUFZO0lBQWxEOztRQUNVLGVBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQXFHbkQsQ0FBQzs7OztJQS9GUSxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssdUJBQXVCO29CQUFFO3dCQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO3dCQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7OzhCQUNyQixPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFO3dCQUNuRCxJQUFJLE9BQU8sRUFBRTs0QkFDWCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7eUJBQ3JDO3dCQUNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3QkFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFD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LENBQUMsZUFBZSxDQUFDLENBQUM7NkJBQ2xFO3lCQUNGO3FCQUNGO2dCQUNILENBQUMsRUFBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLGNBQWMsQ0FBQyxZQUFZO1FBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDakUsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRTtvQkFDbkMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO29CQUMvQixXQUFXLEVBQUUsWUFBWTtvQkFDekIsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQWM7aUJBQ3pELENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7Ozs7OztJQXJHQyxzQ0FBaUQ7Ozs7O0lBRWpELHlDQUEyQjs7Ozs7SUFFM0IsaUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdTY2hlZGFMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IGFueTtcblxuICBwcml2YXRlIHJvdXRlOiBhbnk7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctc2NoZWRhLWxheW91dC5pbml0Jzoge1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xuICAgICAgICAgIHRoaXMucm91dGUgPSBwYXlsb2FkLnJvdXRlO1xuICAgICAgICAgIGNvbnN0IHBhcmFtSWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5pZCB8fCAnJztcbiAgICAgICAgICBpZiAocGFyYW1JZCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRJZCA9IHBhcmFtSWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMubGlzdGVuUm91dGUoKTtcbiAgICAgICAgICB0aGlzLmxvYWROYXZpZ2F0aW9uKHBhcmFtSWQpO1xuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCd2aWV3bGVhZicpO1xuICAgICAgICB9IGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQuZGVzdHJveSc6XG4gICAgICAgICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25EZXN0cm95KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQuZDNlbmQnOiAvLyBib3VuY2UgdGhlIGV2ZW50LCBmcm9tIGJ1YmJsZS1jaGFydCB0byBjaGFydC10aXBweVxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdkM2VuZCcsIHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1zaWRlYmFyLWhlYWRlci5jbGljayc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmNvbGxhcHNlU2lkZWJhcigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQuYnViYmxlLXRvb2x0aXAtZ290by1jbGljayc6IHtcbiAgICAgICAgICBjb25zdCB7IGlkLCBsYWJlbCB9ID0gcGF5bG9hZDtcbiAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICBwYXRoOiBbXG4gICAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuZW50aXRhQmFzZVBhdGgsXG4gICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICBoZWxwZXJzLnNsdWdpZnkobGFiZWwpLFxuICAgICAgICAgICAgICAnb3ZlcnZpZXcnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbGlzdGVuUm91dGUoKSB7XG4gICAgdGhpcy5yb3V0ZS5wYXJhbU1hcC5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgY29uc3QgcGFyYW1JZCA9IHBhcmFtcy5nZXQoJ2lkJyk7XG4gICAgICBpZiAocGFyYW1JZCkge1xuICAgICAgICBpZiAocGFyYW1JZCkge1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50SWQgPSBwYXJhbUlkO1xuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdyb3V0ZWNoYW5nZWQnLCBwYXJhbUlkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY29udGVudElzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkSXRlbShwYXJhbUlkKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmNvbnRlbnRJc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkQ29udGVudChyZXNwb25zZSk7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXNwb25zZS5yZWxhdGVkRW50aXRpZXMpICYmIHJlc3BvbnNlLnJlbGF0ZWRFbnRpdGllcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5idWJibGVzRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLnJlbGF0ZWRFbnRpdGllcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgZWwuZW50aXR5LnJlbGF0aW9uTmFtZSA9IHJlc3BvbnNlLmxhYmVsLmxlbmd0aCA+IDMwXG4gICAgICAgICAgICAgICAgICAgID8gYCR7cmVzcG9uc2UubGFiZWwuc3Vic3RyKDAsIDMwKX0uLi4gYFxuICAgICAgICAgICAgICAgICAgICA6IHJlc3BvbnNlLmxhYmVsO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdmaWx0ZXJidWJibGVyZXNwb25zZScsIHJlc3BvbnNlLnJlbGF0ZWRFbnRpdGllcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkTmF2aWdhdGlvbihzZWxlY3RlZEl0ZW0pIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlTmF2aWdhdGlvbignTG9hZGluZy4uLicpO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5nZXROYXZpZ2F0aW9uKCdwYXRyaW1vbmlvJykuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZXRUcmVlKHJlc3BvbnNlKTtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZU5hdmlnYXRpb24odGhpcy5kYXRhU291cmNlLmdldFRyZWUoKS5sYWJlbCk7XG4gICAgICAgIHRoaXMuZW1pdE91dGVyKCduYXZpZ2F0aW9ucmVzcG9uc2UnLCB7XG4gICAgICAgICAgdHJlZTogdGhpcy5kYXRhU291cmNlLmdldFRyZWUoKSxcbiAgICAgICAgICBjdXJyZW50SXRlbTogc2VsZWN0ZWRJdGVtLFxuICAgICAgICAgIGJhc2VQYXRoOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLnNjaGVkYUJhc2VQYXRoLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19