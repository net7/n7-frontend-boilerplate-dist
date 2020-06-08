/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { CommunicationService } from '../../../common/services/communication.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { MrStaticLayoutConfig as config } from './static-layout.config';
var MrStaticLayoutComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MrStaticLayoutComponent, _super);
    function MrStaticLayoutComponent(communication, route, layoutsConfiguration) {
        var _this = _super.call(this, layoutsConfiguration.get('MrStaticLayoutConfig') || config) || this;
        _this.communication = communication;
        _this.route = route;
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    MrStaticLayoutComponent.prototype.initPayload = /**
     * @protected
     * @return {?}
     */
    function () {
        return {
            communication: this.communication,
            route: this.route,
            options: this.config.options || {}
        };
    };
    /**
     * @return {?}
     */
    MrStaticLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onInit();
    };
    /**
     * @return {?}
     */
    MrStaticLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onDestroy();
    };
    MrStaticLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mr-static-layout',
                    template: "<div class=\"mr-static-layout\" *ngIf=\"lb.dataSource.RENDER_HTML\">\n    <h1 class=\"mr-generated-title-WP\">{{lb.dataSource.RENDER_HTML.title}}</h1>\n    <div class=\"mr-generated-page-WP\" [innerHTML]=\"lb.dataSource.RENDER_HTML.body | keepHtml\"></div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    MrStaticLayoutComponent.ctorParameters = function () { return [
        { type: CommunicationService },
        { type: ActivatedRoute },
        { type: LayoutsConfigurationService }
    ]; };
    return MrStaticLayoutComponent;
}(AbstractLayout));
export { MrStaticLayoutComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MrStaticLayoutComponent.prototype.communication;
    /**
     * @type {?}
     * @private
     */
    MrStaticLayoutComponent.prototype.route;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zdGF0aWMtbGF5b3V0L3N0YXRpYy1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxvQkFBb0IsSUFBSSxNQUFNLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV4RTtJQUk2QyxtREFBYztJQUN6RCxpQ0FDVSxhQUFtQyxFQUNuQyxLQUFxQixFQUM3QixvQkFBaUQ7UUFIbkQsWUFLRSxrQkFBTSxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsSUFBSSxNQUFNLENBQUMsU0FDbEU7UUFMUyxtQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsV0FBSyxHQUFMLEtBQUssQ0FBZ0I7O0lBSS9CLENBQUM7Ozs7O0lBRVMsNkNBQVc7Ozs7SUFBckI7UUFDRSxPQUFPO1lBQ0wsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRTtTQUNuQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELDBDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsNkNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7O2dCQTNCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsc1JBQW1DO2lCQUNwQzs7OztnQkFQUSxvQkFBb0I7Z0JBRnBCLGNBQWM7Z0JBR2QsMkJBQTJCOztJQStCcEMsOEJBQUM7Q0FBQSxBQTVCRCxDQUk2QyxjQUFjLEdBd0IxRDtTQXhCWSx1QkFBdUI7Ozs7OztJQUVoQyxnREFBMkM7Ozs7O0lBQzNDLHdDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQnO1xuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9sYXlvdXRzLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNclN0YXRpY0xheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL3N0YXRpYy1sYXlvdXQuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXItc3RhdGljLWxheW91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGF0aWMtbGF5b3V0Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNclN0YXRpY0xheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIGxheW91dHNDb25maWd1cmF0aW9uOiBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICkge1xuICAgIHN1cGVyKGxheW91dHNDb25maWd1cmF0aW9uLmdldCgnTXJTdGF0aWNMYXlvdXRDb25maWcnKSB8fCBjb25maWcpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb21tdW5pY2F0aW9uOiB0aGlzLmNvbW11bmljYXRpb24sXG4gICAgICByb3V0ZTogdGhpcy5yb3V0ZSxcbiAgICAgIG9wdGlvbnM6IHRoaXMuY29uZmlnLm9wdGlvbnMgfHwge31cbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vbkluaXQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMub25EZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==