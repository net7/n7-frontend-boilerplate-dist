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
import { MrSearchService } from '../../services/search.service';
import searchConfig from './search-config.mock';
export class MrSearchLayoutComponent extends AbstractLayout {
    /**
     * @param {?} layoutsConfiguration
     * @param {?} router
     * @param {?} activatedRoute
     * @param {?} communication
     * @param {?} configuration
     * @param {?} searchService
     */
    constructor(layoutsConfiguration, router, activatedRoute, communication, configuration, searchService) {
        super(layoutsConfiguration.get('MrSearchLayoutConfig') || config);
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.communication = communication;
        this.configuration = configuration;
        this.searchService = searchService;
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
            searchService: this.searchService,
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
            this.searchService.init(this.configId, searchConfig);
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
                template: "<div class=\"mr-search mr-layout\"\n     *ngIf=\"lb.dataSource\">\n    <section class=\"mr-layout__maxwidth\">\n\n        <div class=\"mr-search__title\">\n            <n7-inner-title\n            [data]=\"lb.widgets['mr-search-page-title'].ds.out$ | async\">\n            </n7-inner-title>\n        </div>\n        \n        <div class=\"mr-search__results-content\">\n            <aside class=\"mr-search__facets\">\n                <div class=\"filter-section\">\n                    <h2 *ngIf=\"lb.dataSource.pageConfig['facets-title']\">\n                        {{ lb.dataSource.pageConfig['facets-title'] }}\n                    </h2>\n                    <mr-search-facets-layout \n                    [searchService]=\"lb.dataSource.searchService\">\n                    </mr-search-facets-layout>\n                </div>\n            </aside>\n            <div class=\"mr-search__results-wrapper\">\n                <div class=\"mr-search__results-info\">\n                    <n7-inner-title\n                    [data]=\"lb.widgets['mr-search-results-title'].ds.out$ | async\"\n                    [emit]=\"lb.widgets['mr-search-results-title'].emit\">\n                    </n7-inner-title>\n                </div>\n                <div class=\"mr-search__results-filters\">\n                    <n7-tag *ngFor=\"let tag of (lb.widgets['mr-search-tags'].ds.out$ | async)\"\n                    [data]=\"tag\"\n                    [emit]=\"lb.widgets['mr-search-tags'].emit\">\n                    </n7-tag>\n                </div>\n                <main class=\"mr-search__results\">\n                    <!-- SEARCH RESULTS -->\n                    <ng-container [ngSwitch]=\"lb.dataSource.sectionState.results\">\n                        \n                        <!-- loading -->\n                        <ng-container *ngSwitchCase=\"'LOADING'\">\n                            <div class=\"mr-search__results-loading\">\n                                <n7-content-placeholder *ngFor=\"let n of [0,1,2,3,4,5,6,7,8,9]\" [data]=\"{\n                                    blocks: [\n                                        { classes: 'search-result-placeholder-title' },\n                                        { classes: 'search-result-placeholder-metadata' },\n                                        { classes: 'search-result-placeholder-metadata' },\n                                        { classes: 'search-result-placeholder-metadata' }\n                                    ]\n                                }\"></n7-content-placeholder>\n                            </div>\n                        </ng-container>\n                        \n                        <!-- ok: items > 0 -->\n                        <ng-container *ngSwitchCase=\"'OK'\">\n                            <n7-item-preview *ngFor=\"let item of (lb.widgets['mr-search-results'].ds.out$ | async)\"\n                            [data]=\"item\">\n                            </n7-item-preview>\n                        </ng-container>\n\n                        <!-- ok: items === 0 -->\n                        <ng-container *ngSwitchCase=\"'EMPTY'\">\n                            <div class=\"mr-search__results-fallback\">\n                                <p class=\"mr-search__results-fallback-string\">\n                                    {{ lb.dataSource.pageConfig.fallback.text }}\n                                </p>\n                                <button class=\"n7-btn mr-search__results-fallback-button\"\n                                    (click)=\"lb.eventHandler.emitInner('searchreset')\">\n                                    {{ lb.dataSource.pageConfig.fallback.button }}\n                                </button>\n                            </div>\n                        </ng-container>\n\n                        <!-- ko: request problem -->\n                        <ng-container *ngSwitchCase=\"'KO'\">\n                            <p class=\"mr-search__results-ko-string\">\n                                {{ lb.dataSource.pageConfig.ko.text }}\n                            </p>\n                            <button class=\"n7-btn mr-search__results-ko-button\"\n                                (click)=\"lb.eventHandler.emitInner('searchreset')\">\n                                {{ lb.dataSource.pageConfig.ko.button }}\n                            </button>\n                        </ng-container>\n                        \n                    </ng-container>\n                </main>               \n                <n7-smart-pagination\n                [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\n                [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\n                </n7-smart-pagination>\n            </div>\n        </div>\n\n    </section>\n</div>\n"
            }] }
];
/** @nocollapse */
MrSearchLayoutComponent.ctorParameters = () => [
    { type: LayoutsConfigurationService },
    { type: Router },
    { type: ActivatedRoute },
    { type: CommunicationService },
    { type: ConfigurationService },
    { type: MrSearchService }
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
    /**
     * @type {?}
     * @private
     */
    MrSearchLayoutComponent.prototype.searchService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDckcsT0FBTyxFQUFFLG9CQUFvQixJQUFJLE1BQU0sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLFlBQVksTUFBTSxzQkFBc0IsQ0FBQztBQU9oRCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsY0FBYzs7Ozs7Ozs7O0lBT3pELFlBQ0Usb0JBQWlELEVBQ3pDLE1BQWMsRUFDZCxjQUE4QixFQUM5QixhQUFtQyxFQUNuQyxhQUFtQyxFQUNuQyxhQUE4QjtRQUV0QyxLQUFLLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLElBQUksTUFBTSxDQUFDLENBQUM7UUFOMUQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtRQVZ4QyxjQUFTLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFFeEMsZUFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBV3pDLENBQUM7Ozs7O0lBRVMsV0FBVztRQUNuQixPQUFPO1lBQ0wsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTs7WUFFakMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFO1NBQ25DLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7OztZQTdDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsK3RKQUFtQzthQUNwQzs7OztZQVhRLDJCQUEyQjtZQUhYLE1BQU07WUFBdEIsY0FBYztZQUtkLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsZUFBZTs7Ozs7OztJQVN0QiwyQ0FBeUI7O0lBRXpCLDRDQUF3Qzs7SUFFeEMsNkNBQXlDOzs7OztJQUl2Qyx5Q0FBc0I7Ozs7O0lBQ3RCLGlEQUFzQzs7Ozs7SUFDdEMsZ0RBQTJDOzs7OztJQUMzQyxnREFBMkM7Ozs7O0lBQzNDLGdEQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XG5pbXBvcnQgeyBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTXJTZWFyY2hMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9zZWFyY2gtbGF5b3V0LmNvbmZpZyc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE1yU2VhcmNoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlJztcbmltcG9ydCBzZWFyY2hDb25maWcgZnJvbSAnLi9zZWFyY2gtY29uZmlnLm1vY2snO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21yLXNlYXJjaC1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLWxheW91dC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBjb25maWdJZDogc3RyaW5nO1xuXG4gIGhvc3RFbWl0JDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICBndWVzdEVtaXQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGxheW91dHNDb25maWd1cmF0aW9uOiBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZWFyY2hTZXJ2aWNlOiBNclNlYXJjaFNlcnZpY2UsXG4gICkge1xuICAgIHN1cGVyKGxheW91dHNDb25maWd1cmF0aW9uLmdldCgnTXJTZWFyY2hMYXlvdXRDb25maWcnKSB8fCBjb25maWcpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWdJZDogdGhpcy5jb25maWdJZCxcbiAgICAgIGNvbmZpZ3VyYXRpb246IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgIC8vIG1haW5TdGF0ZTogdGhpcy5tYWluU3RhdGUsXG4gICAgICByb3V0ZXI6IHRoaXMucm91dGVyLFxuICAgICAgYWN0aXZhdGVkUm91dGU6IHRoaXMuYWN0aXZhdGVkUm91dGUsXG4gICAgICBjb21tdW5pY2F0aW9uOiB0aGlzLmNvbW11bmljYXRpb24sXG4gICAgICBzZWFyY2hTZXJ2aWNlOiB0aGlzLnNlYXJjaFNlcnZpY2UsXG4gICAgICBvcHRpb25zOiB0aGlzLmNvbmZpZy5vcHRpb25zIHx8IHt9LFxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLmRhdGEuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLmNvbmZpZ0lkID0gZGF0YS5jb25maWdJZDtcbiAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5pbml0KHRoaXMuY29uZmlnSWQsIHNlYXJjaENvbmZpZyk7XG4gICAgICB0aGlzLm9uSW5pdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgfVxufVxuIl19