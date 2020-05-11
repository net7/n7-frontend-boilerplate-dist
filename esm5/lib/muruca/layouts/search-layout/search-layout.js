/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { MrSearchLayoutConfig as config } from './search-layout.config';
// import { CommunicationService } from '../../../common/services/communication.service';
var MrSearchLayoutComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MrSearchLayoutComponent, _super);
    function MrSearchLayoutComponent(layoutsConfiguration, router, activatedRoute) {
        var _this = _super.call(this, layoutsConfiguration.get('MrSearchLayoutConfig') || config) || this;
        _this.router = router;
        _this.activatedRoute = activatedRoute;
        _this.hostEmit$ = new Subject();
        _this.guestEmit$ = new Subject();
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    MrSearchLayoutComponent.prototype.initPayload = /**
     * @protected
     * @return {?}
     */
    function () {
        return {
            // configuration: this.configuration,
            // mainState: this.mainState,
            router: this.router,
            activatedRoute: this.activatedRoute,
            // communication: this.communication,
            hostEmit$: this.hostEmit$,
            guestEmit$: this.guestEmit$,
            options: this.config.options || {},
        };
    };
    /**
     * @return {?}
     */
    MrSearchLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onInit();
    };
    /**
     * @return {?}
     */
    MrSearchLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onDestroy();
    };
    MrSearchLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mr-search-layout',
                    template: "<div class=\"mr-search mr-layout\"\n     *ngIf=\"lb.dataSource\">\n    <section class=\"mr-layout__maxwidth\">\n\n        <div class=\"mr-search__title\">\n            INNER TITLE COMPONENT HERE\n        </div>\n        \n        <div class=\"mr-search__results-content\">\n            <aside class=\"mr-search__facets\">\n                <div class=\"filter-section\">\n                    <h2>Filtra i risultati</h2>\n                    <mr-search-facets-layout \n                    [data]=\"lb.dataSource.facetsConfig\"\n                    [hostEmit$]=\"hostEmit$\"\n                    [guestEmit$]=\"guestEmit$\">\n                    </mr-search-facets-layout>\n                </div>\n            </aside>\n            <div class=\"mr-search__results-wrapper\">\n                <div class=\"mr-search__results-info\">\n                    Inner title with results number and sorting\n                </div>\n                <div class=\"mr-search__results-filters\">\n                    Filter, when active\n                </div>\n                <main class=\"mr-search__results\">\n                    <n7-item-preview *ngFor=\"let resource of (lb.widgets['mr-resources'].ds.out$ | async)\"\n                                    [data]=\"resource\">\n                    </n7-item-preview>\n                </main>\n            </div>\n        </div>\n\n    </section>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    MrSearchLayoutComponent.ctorParameters = function () { return [
        { type: LayoutsConfigurationService },
        { type: Router },
        { type: ActivatedRoute }
    ]; };
    return MrSearchLayoutComponent;
}(AbstractLayout));
export { MrSearchLayoutComponent };
if (false) {
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxvQkFBb0IsSUFBSSxNQUFNLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFJeEU7SUFJNkMsbURBQWM7SUFLekQsaUNBQ0Usb0JBQWlELEVBQ3pDLE1BQWMsRUFDZCxjQUE4QjtRQUh4QyxZQU1FLGtCQUFNLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxTQUNsRTtRQUxTLFlBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFQeEMsZUFBUyxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRXhDLGdCQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7O0lBU3pDLENBQUM7Ozs7O0lBRVMsNkNBQVc7Ozs7SUFBckI7UUFDRSxPQUFPOzs7WUFHTCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjOztZQUVuQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFO1NBQ25DLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsMENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCw2Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Z0JBckNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1Qiw0M0NBQW1DO2lCQUNwQzs7OztnQkFSUSwyQkFBMkI7Z0JBSFgsTUFBTTtnQkFBdEIsY0FBYzs7SUE4Q3ZCLDhCQUFDO0NBQUEsQUF0Q0QsQ0FJNkMsY0FBYyxHQWtDMUQ7U0FsQ1ksdUJBQXVCOzs7SUFDbEMsNENBQXdDOztJQUV4Qyw2Q0FBeUM7Ozs7O0lBSXZDLHlDQUFzQjs7Ozs7SUFDdEIsaURBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0JztcbmltcG9ydCB7IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9sYXlvdXRzLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNclNlYXJjaExheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL3NlYXJjaC1sYXlvdXQuY29uZmlnJztcbi8vIGltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXItc2VhcmNoLWxheW91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gtbGF5b3V0Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNclNlYXJjaExheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBob3N0RW1pdCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgZ3Vlc3RFbWl0JDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBsYXlvdXRzQ29uZmlndXJhdGlvbjogTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgLy8gcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSxcbiAgKSB7XG4gICAgc3VwZXIobGF5b3V0c0NvbmZpZ3VyYXRpb24uZ2V0KCdNclNlYXJjaExheW91dENvbmZpZycpIHx8IGNvbmZpZyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdFBheWxvYWQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIGNvbmZpZ3VyYXRpb246IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgIC8vIG1haW5TdGF0ZTogdGhpcy5tYWluU3RhdGUsXG4gICAgICByb3V0ZXI6IHRoaXMucm91dGVyLFxuICAgICAgYWN0aXZhdGVkUm91dGU6IHRoaXMuYWN0aXZhdGVkUm91dGUsXG4gICAgICAvLyBjb21tdW5pY2F0aW9uOiB0aGlzLmNvbW11bmljYXRpb24sXG4gICAgICBob3N0RW1pdCQ6IHRoaXMuaG9zdEVtaXQkLFxuICAgICAgZ3Vlc3RFbWl0JDogdGhpcy5ndWVzdEVtaXQkLFxuICAgICAgb3B0aW9uczogdGhpcy5jb25maWcub3B0aW9ucyB8fCB7fSxcbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vbkluaXQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMub25EZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==