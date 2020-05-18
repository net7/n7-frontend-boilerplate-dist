/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { MrSearchLayoutConfig as config } from './search-layout.config';
import { CommunicationService } from '../../../common/services/communication.service';
import { ConfigurationService } from '../../../common/services/configuration.service';
export class MrSearchLayoutComponent extends AbstractLayout {
    /**
     * @param {?} layoutsConfiguration
     * @param {?} router
     * @param {?} activatedRoute
     * @param {?} communication
     * @param {?} configuration
     */
    constructor(layoutsConfiguration, router, activatedRoute, communication, configuration) {
        super(layoutsConfiguration.get('MrSearchLayoutConfig') || config);
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.communication = communication;
        this.configuration = configuration;
        this.hostEmit$ = new Subject();
        this.guestEmit$ = new Subject();
    }
    /**
     * @protected
     * @return {?}
     */
    initPayload() {
        return {
            configId: this.configId,
            configuration: this.configuration,
            // mainState: this.mainState,
            router: this.router,
            activatedRoute: this.activatedRoute,
            communication: this.communication,
            hostEmit$: this.hostEmit$,
            guestEmit$: this.guestEmit$,
            options: this.config.options || {},
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.activatedRoute.data.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.configId = data.configId;
            this.onInit();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.onDestroy();
    }
}
MrSearchLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'mr-search-layout',
                template: "<div class=\"mr-search mr-layout\"\n     *ngIf=\"lb.dataSource\">\n    <section class=\"mr-layout__maxwidth\">\n\n        <div class=\"mr-search__title\">\n            <n7-inner-title\n            [data]=\"lb.widgets['mr-search-page-title'].ds.out$ | async\">\n            </n7-inner-title>\n        </div>\n        \n        <div class=\"mr-search__results-content\">\n            <aside class=\"mr-search__facets\">\n                <div class=\"filter-section\">\n                    <h2>{{ lb.dataSource.pageConfig['facets-title'] }}</h2>\n                    <mr-search-facets-layout \n                    [data]=\"lb.dataSource.facetsConfig\"\n                    [hostEmit$]=\"hostEmit$\"\n                    [guestEmit$]=\"guestEmit$\">\n                    </mr-search-facets-layout>\n                </div>\n            </aside>\n            <div class=\"mr-search__results-wrapper\">\n                <div class=\"mr-search__results-info\">\n                    <n7-inner-title\n                    [data]=\"lb.widgets['mr-search-results-title'].ds.out$ | async\"\n                    [emit]=\"lb.widgets['mr-search-results-title'].emit\">\n                    </n7-inner-title>\n                </div>\n                <div class=\"mr-search__results-filters\">\n                    <n7-tag *ngFor=\"let tag of (lb.widgets['mr-search-tags'].ds.out$ | async)\"\n                    [data]=\"tag\"\n                    [emit]=\"lb.widgets['mr-search-tags'].emit\">\n                    </n7-tag>\n                </div>\n                <main class=\"mr-search__results\">\n                    <!-- SEARCH RESULTS -->\n                    <ng-container [ngSwitch]=\"lb.dataSource.sectionState.results\">\n                        \n                        <!-- loading -->\n                        <ng-container *ngSwitchCase=\"'LOADING'\">\n                            <div class=\"mr-search__results-loading\">\n                                <n7-content-placeholder *ngFor=\"let n of [0,1,2,3,4,5,6,7,8,9]\" [data]=\"{\n                                    blocks: [\n                                        { classes: 'search-result-placeholder-title' },\n                                        { classes: 'search-result-placeholder-metadata' },\n                                        { classes: 'search-result-placeholder-metadata' },\n                                        { classes: 'search-result-placeholder-metadata' }\n                                    ]\n                                }\"></n7-content-placeholder>\n                            </div>\n                        </ng-container>\n                        \n                        <!-- ok: items > 0 -->\n                        <ng-container *ngSwitchCase=\"'OK'\">\n                            <n7-item-preview *ngFor=\"let item of (lb.widgets['mr-search-results'].ds.out$ | async)\"\n                            [data]=\"item\">\n                            </n7-item-preview>\n                        </ng-container>\n\n                        <!-- ok: items === 0 -->\n                        <ng-container *ngSwitchCase=\"'EMPTY'\">\n                            <div class=\"mr-search__results-fallback\">\n                                <p class=\"mr-search__results-fallback-string\">\n                                    {{ lb.dataSource.pageConfig.fallback.text }}\n                                </p>\n                                <button class=\"n7-btn mr-search__results-fallback-button\"\n                                    (click)=\"lb.eventHandler.emitInner('searchreset')\">\n                                    {{ lb.dataSource.pageConfig.fallback.button }}\n                                </button>\n                            </div>\n                        </ng-container>\n\n                        <!-- ko: request problem -->\n                        <ng-container *ngSwitchCase=\"'KO'\">\n                            <p class=\"mr-search__results-ko-string\">\n                                {{ lb.dataSource.pageConfig.ko.text }}\n                            </p>\n                            <button class=\"n7-btn mr-search__results-ko-button\"\n                                (click)=\"lb.eventHandler.emitInner('searchreset')\">\n                                {{ lb.dataSource.pageConfig.ko.button }}\n                            </button>\n                        </ng-container>\n                        \n                    </ng-container>\n                </main>               \n                <n7-smart-pagination\n                [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\n                [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\n                </n7-smart-pagination>\n            </div>\n        </div>\n\n    </section>\n</div>\n"
            }] }
];
/** @nocollapse */
MrSearchLayoutComponent.ctorParameters = () => [
    { type: LayoutsConfigurationService },
    { type: Router },
    { type: ActivatedRoute },
    { type: CommunicationService },
    { type: ConfigurationService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    MrSearchLayoutComponent.prototype.configId;
    /** @type {?} */
    MrSearchLayoutComponent.prototype.hostEmit$;
    /** @type {?} */
    MrSearchLayoutComponent.prototype.guestEmit$;
    /**
     * @type {?}
     * @private
     */
    MrSearchLayoutComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    MrSearchLayoutComponent.prototype.activatedRoute;
    /**
     * @type {?}
     * @private
     */
    MrSearchLayoutComponent.prototype.communication;
    /**
     * @type {?}
     * @private
     */
    MrSearchLayoutComponent.prototype.configuration;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDckcsT0FBTyxFQUFFLG9CQUFvQixJQUFJLE1BQU0sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBT3RGLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxjQUFjOzs7Ozs7OztJQU96RCxZQUNFLG9CQUFpRCxFQUN6QyxNQUFjLEVBQ2QsY0FBOEIsRUFDOUIsYUFBbUMsRUFDbkMsYUFBbUM7UUFFM0MsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDO1FBTDFELFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQVQ3QyxjQUFTLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFFeEMsZUFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBVXpDLENBQUM7Ozs7O0lBRVMsV0FBVztRQUNuQixPQUFPO1lBQ0wsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTs7WUFFakMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRTtTQUNuQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDOUIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7O1lBNUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixrdEpBQW1DO2FBQ3BDOzs7O1lBVFEsMkJBQTJCO1lBSFgsTUFBTTtZQUF0QixjQUFjO1lBS2Qsb0JBQW9CO1lBQ3BCLG9CQUFvQjs7Ozs7OztJQVEzQiwyQ0FBeUI7O0lBRXpCLDRDQUF3Qzs7SUFFeEMsNkNBQXlDOzs7OztJQUl2Qyx5Q0FBc0I7Ozs7O0lBQ3RCLGlEQUFzQzs7Ozs7SUFDdEMsZ0RBQTJDOzs7OztJQUMzQyxnREFBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQnO1xuaW1wb3J0IHsgTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2xheW91dHMtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE1yU2VhcmNoTGF5b3V0Q29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJy4vc2VhcmNoLWxheW91dC5jb25maWcnO1xuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXItc2VhcmNoLWxheW91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gtbGF5b3V0Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNclNlYXJjaExheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGNvbmZpZ0lkOiBzdHJpbmc7XG5cbiAgaG9zdEVtaXQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIGd1ZXN0RW1pdCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgbGF5b3V0c0NvbmZpZ3VyYXRpb246IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZSxcbiAgKSB7XG4gICAgc3VwZXIobGF5b3V0c0NvbmZpZ3VyYXRpb24uZ2V0KCdNclNlYXJjaExheW91dENvbmZpZycpIHx8IGNvbmZpZyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdFBheWxvYWQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZ0lkOiB0aGlzLmNvbmZpZ0lkLFxuICAgICAgY29uZmlndXJhdGlvbjogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgLy8gbWFpblN0YXRlOiB0aGlzLm1haW5TdGF0ZSxcbiAgICAgIHJvdXRlcjogdGhpcy5yb3V0ZXIsXG4gICAgICBhY3RpdmF0ZWRSb3V0ZTogdGhpcy5hY3RpdmF0ZWRSb3V0ZSxcbiAgICAgIGNvbW11bmljYXRpb246IHRoaXMuY29tbXVuaWNhdGlvbixcbiAgICAgIGhvc3RFbWl0JDogdGhpcy5ob3N0RW1pdCQsXG4gICAgICBndWVzdEVtaXQkOiB0aGlzLmd1ZXN0RW1pdCQsXG4gICAgICBvcHRpb25zOiB0aGlzLmNvbmZpZy5vcHRpb25zIHx8IHt9LFxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLmRhdGEuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLmNvbmZpZ0lkID0gZGF0YS5jb25maWdJZDtcbiAgICAgIHRoaXMub25Jbml0KCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm9uRGVzdHJveSgpO1xuICB9XG59XG4iXX0=