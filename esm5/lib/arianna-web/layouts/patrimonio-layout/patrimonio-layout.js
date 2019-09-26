/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { MainStateService } from '../../../common/services';
import { AwPatrimonioLayoutConfig as config } from './patrimonio-layout.config';
var AwPatrimonioLayoutComponent = /** @class */ (function (_super) {
    tslib_1.__extends(AwPatrimonioLayoutComponent, _super);
    function AwPatrimonioLayoutComponent(router, configuration, layoutsConfiguration, mainState, titleService) {
        var _this = _super.call(this, layoutsConfiguration.get('AwPatrimonioLayoutConfig') || config) || this;
        _this.router = router;
        _this.configuration = configuration;
        _this.layoutsConfiguration = layoutsConfiguration;
        _this.mainState = mainState;
        _this.titleService = titleService;
        return _this;
    }
    /**
     * Optional variables that can be accessed from the layout's logic.
     * If removed, they must also be removed from the layout's DataSource file,
     * and from this file imports.
     */
    /**
     * Optional variables that can be accessed from the layout's logic.
     * If removed, they must also be removed from the layout's DataSource file,
     * and from this file imports.
     * @protected
     * @return {?}
     */
    AwPatrimonioLayoutComponent.prototype.initPayload = /**
     * Optional variables that can be accessed from the layout's logic.
     * If removed, they must also be removed from the layout's DataSource file,
     * and from this file imports.
     * @protected
     * @return {?}
     */
    function () {
        return {
            configuration: this.configuration,
            mainState: this.mainState,
            router: this.router,
            titleService: this.titleService,
            options: this.config.options || {},
        };
    };
    /**
     * @return {?}
     */
    AwPatrimonioLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onInit();
    };
    /**
     * @return {?}
     */
    AwPatrimonioLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onDestroy();
    };
    AwPatrimonioLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aw-patrimonio-layout',
                    template: "<div class=\"aw-patrimonio-layout\" id=\"patrimonio-layout\">\n    Layout patrimonio!\n</div>"
                }] }
    ];
    /** @nocollapse */
    AwPatrimonioLayoutComponent.ctorParameters = function () { return [
        { type: Router },
        { type: ConfigurationService },
        { type: LayoutsConfigurationService },
        { type: MainStateService },
        { type: Title }
    ]; };
    return AwPatrimonioLayoutComponent;
}(AbstractLayout));
export { AwPatrimonioLayoutComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwPatrimonioLayoutComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    AwPatrimonioLayoutComponent.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    AwPatrimonioLayoutComponent.prototype.layoutsConfiguration;
    /**
     * @type {?}
     * @private
     */
    AwPatrimonioLayoutComponent.prototype.mainState;
    /**
     * @type {?}
     * @private
     */
    AwPatrimonioLayoutComponent.prototype.titleService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0cmltb25pby1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9wYXRyaW1vbmlvLWxheW91dC9wYXRyaW1vbmlvLWxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFBO0FBQ3ZFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSx3QkFBd0IsSUFBSSxNQUFNLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVoRjtJQUtpRCx1REFBYztJQUM3RCxxQ0FDVSxNQUFjLEVBQ2QsYUFBbUMsRUFDbkMsb0JBQWlELEVBQ2pELFNBQTJCLEVBQzNCLFlBQW1CO1FBTDdCLFlBT0Usa0JBQU0sb0JBQW9CLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLElBQUksTUFBTSxDQUFDLFNBQ3RFO1FBUFMsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG1CQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQywwQkFBb0IsR0FBcEIsb0JBQW9CLENBQTZCO1FBQ2pELGVBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLGtCQUFZLEdBQVosWUFBWSxDQUFPOztJQUc3QixDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7Ozs7SUFDTyxpREFBVzs7Ozs7OztJQUFyQjtRQUNFLE9BQU87WUFDTCxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUU7U0FDbkMsQ0FBQTtJQUNILENBQUM7Ozs7SUFFRCw4Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELGlEQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOztnQkFyQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLHlHQUF1QztpQkFDeEM7Ozs7Z0JBWFEsTUFBTTtnQkFHTixvQkFBb0I7Z0JBQ3BCLDJCQUEyQjtnQkFDM0IsZ0JBQWdCO2dCQUpoQixLQUFLOztJQTZDZCxrQ0FBQztDQUFBLEFBdENELENBS2lELGNBQWMsR0FpQzlEO1NBakNZLDJCQUEyQjs7Ozs7O0lBRXBDLDZDQUFzQjs7Ozs7SUFDdEIsb0RBQTJDOzs7OztJQUMzQywyREFBeUQ7Ozs7O0lBQ3pELGdEQUFtQzs7Ozs7SUFDbkMsbURBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0J1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9sYXlvdXRzLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzJztcbmltcG9ydCB7IEF3UGF0cmltb25pb0xheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL3BhdHJpbW9uaW8tbGF5b3V0LmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F3LXBhdHJpbW9uaW8tbGF5b3V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhdHJpbW9uaW8tbGF5b3V0Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgQXdQYXRyaW1vbmlvTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGxheW91dHNDb25maWd1cmF0aW9uOiBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtYWluU3RhdGU6IE1haW5TdGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0aXRsZVNlcnZpY2U6IFRpdGxlXG4gICkge1xuICAgIHN1cGVyKGxheW91dHNDb25maWd1cmF0aW9uLmdldCgnQXdQYXRyaW1vbmlvTGF5b3V0Q29uZmlnJykgfHwgY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcHRpb25hbCB2YXJpYWJsZXMgdGhhdCBjYW4gYmUgYWNjZXNzZWQgZnJvbSB0aGUgbGF5b3V0J3MgbG9naWMuXG4gICAqIElmIHJlbW92ZWQsIHRoZXkgbXVzdCBhbHNvIGJlIHJlbW92ZWQgZnJvbSB0aGUgbGF5b3V0J3MgRGF0YVNvdXJjZSBmaWxlLFxuICAgKiBhbmQgZnJvbSB0aGlzIGZpbGUgaW1wb3J0cy5cbiAgICovXG4gIHByb3RlY3RlZCBpbml0UGF5bG9hZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlndXJhdGlvbjogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgbWFpblN0YXRlOiB0aGlzLm1haW5TdGF0ZSxcbiAgICAgIHJvdXRlcjogdGhpcy5yb3V0ZXIsXG4gICAgICB0aXRsZVNlcnZpY2U6IHRoaXMudGl0bGVTZXJ2aWNlLFxuICAgICAgb3B0aW9uczogdGhpcy5jb25maWcub3B0aW9ucyB8fCB7fSxcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9uSW5pdCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgfVxufSJdfQ==