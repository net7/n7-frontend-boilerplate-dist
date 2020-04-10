/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUM7QUFFOUMsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFlBQVk7SUFBbEQ7O1FBQ1UsZUFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBOEZuRCxDQUFDOzs7O0lBeEZRLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyx1QkFBdUI7b0JBQUU7d0JBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7d0JBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQzs7OEJBQ3JCLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUU7d0JBQ25ELElBQUksT0FBTyxFQUFFOzRCQUNYLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQzt5QkFDckM7d0JBQ0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUNuQixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUM5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QUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRTtvQkFDbkMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO29CQUMvQixXQUFXLEVBQUUsWUFBWTtvQkFDekIsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQWM7aUJBQ3pELENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7Ozs7OztJQTlGQyxzQ0FBaUQ7Ozs7O0lBRWpELHlDQUEyQjs7Ozs7SUFFM0IsaUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdTY2hlZGFMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IGFueTtcblxuICBwcml2YXRlIHJvdXRlOiBhbnk7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctc2NoZWRhLWxheW91dC5pbml0Jzoge1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xuICAgICAgICAgIHRoaXMucm91dGUgPSBwYXlsb2FkLnJvdXRlO1xuICAgICAgICAgIGNvbnN0IHBhcmFtSWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5pZCB8fCAnJztcbiAgICAgICAgICBpZiAocGFyYW1JZCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRJZCA9IHBhcmFtSWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMubGlzdGVuUm91dGUoKTtcbiAgICAgICAgICB0aGlzLmxvYWROYXZpZ2F0aW9uKHBhcmFtSWQpO1xuICAgICAgICB9IGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQuZGVzdHJveSc6XG4gICAgICAgICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25EZXN0cm95KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQuZDNlbmQnOiAvLyBib3VuY2UgdGhlIGV2ZW50LCBmcm9tIGJ1YmJsZS1jaGFydCB0byBjaGFydC10aXBweVxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdkM2VuZCcsIHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1zaWRlYmFyLWhlYWRlci5jbGljayc6IHRoaXMuZGF0YVNvdXJjZS5jb2xsYXBzZVNpZGViYXIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmJ1YmJsZS10b29sdGlwLWdvdG8tY2xpY2snOiB7XG4gICAgICAgICAgY29uc3QgeyBpZCwgbGFiZWwgfSA9IHBheWxvYWQ7XG4gICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgcGF0aDogW1xuICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLmVudGl0YUJhc2VQYXRoLFxuICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgaGVscGVycy5zbHVnaWZ5KGxhYmVsKSxcbiAgICAgICAgICAgICAgJ292ZXJ2aWV3JyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGxpc3RlblJvdXRlKCkge1xuICAgIHRoaXMucm91dGUucGFyYW1NYXAuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgIGNvbnN0IHBhcmFtSWQgPSBwYXJhbXMuZ2V0KCdpZCcpO1xuICAgICAgaWYgKHBhcmFtSWQpIHtcbiAgICAgICAgaWYgKHBhcmFtSWQpIHtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY3VycmVudElkID0gcGFyYW1JZDtcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcigncm91dGVjaGFuZ2VkJywgcGFyYW1JZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmNvbnRlbnRJc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZEl0ZW0ocGFyYW1JZCkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jb250ZW50SXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZENvbnRlbnQocmVzcG9uc2UpO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzcG9uc2UucmVsYXRlZEVudGl0aWVzKSAmJiByZXNwb25zZS5yZWxhdGVkRW50aXRpZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2UuYnViYmxlc0VuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZmlsdGVyYnViYmxlcmVzcG9uc2UnLCByZXNwb25zZS5yZWxhdGVkRW50aXRpZXMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZE5hdmlnYXRpb24oc2VsZWN0ZWRJdGVtKSB7XG4gICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZU5hdmlnYXRpb24oJ0xvYWRpbmcuLi4nKTtcbiAgICB0aGlzLmRhdGFTb3VyY2UuZ2V0TmF2aWdhdGlvbigncGF0cmltb25pbycpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0VHJlZShyZXNwb25zZSk7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVOYXZpZ2F0aW9uKHRoaXMuZGF0YVNvdXJjZS5nZXRUcmVlKCkubGFiZWwpO1xuICAgICAgICB0aGlzLmVtaXRPdXRlcignbmF2aWdhdGlvbnJlc3BvbnNlJywge1xuICAgICAgICAgIHRyZWU6IHRoaXMuZGF0YVNvdXJjZS5nZXRUcmVlKCksXG4gICAgICAgICAgY3VycmVudEl0ZW06IHNlbGVjdGVkSXRlbSxcbiAgICAgICAgICBiYXNlUGF0aDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5zY2hlZGFCYXNlUGF0aCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==