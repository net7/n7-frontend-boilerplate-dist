/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { CommunicationService } from '../../../common/services/communication.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { MrStaticLayoutConfig as config } from './static-layout.config';
export class MrStaticLayoutComponent extends AbstractLayout {
    /**
     * @param {?} communication
     * @param {?} route
     * @param {?} layoutsConfiguration
     */
    constructor(communication, route, layoutsConfiguration) {
        super(layoutsConfiguration.get('MrStaticLayoutConfig') || config);
        this.communication = communication;
        this.route = route;
    }
    /**
     * @protected
     * @return {?}
     */
    initPayload() {
        return {
            communication: this.communication,
            route: this.route,
            options: this.config.options || {}
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onInit();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.onDestroy();
    }
}
MrStaticLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'mr-static-layout',
                template: "<div class=\"mr-static-layout\" *ngIf=\"lb.dataSource.RENDER_HTML\">\n    <h1 class=\"mr-generated-title-WP\">{{lb.dataSource.RENDER_HTML.title}}</h1>\n    <div class=\"mr-generated-page-WP\" [innerHTML]=\"lb.dataSource.RENDER_HTML.body | keepHtml\"></div>\n</div>\n"
            }] }
];
/** @nocollapse */
MrStaticLayoutComponent.ctorParameters = () => [
    { type: CommunicationService },
    { type: ActivatedRoute },
    { type: LayoutsConfigurationService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zdGF0aWMtbGF5b3V0L3N0YXRpYy1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDckcsT0FBTyxFQUFFLG9CQUFvQixJQUFJLE1BQU0sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBTXhFLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxjQUFjOzs7Ozs7SUFDekQsWUFDVSxhQUFtQyxFQUNuQyxLQUFxQixFQUM3QixvQkFBaUQ7UUFFakQsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDO1FBSjFELGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtJQUkvQixDQUFDOzs7OztJQUVTLFdBQVc7UUFDbkIsT0FBTztZQUNMLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUU7U0FDbkMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7OztZQTNCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsc1JBQW1DO2FBQ3BDOzs7O1lBUFEsb0JBQW9CO1lBRnBCLGNBQWM7WUFHZCwyQkFBMkI7Ozs7Ozs7SUFTaEMsZ0RBQTJDOzs7OztJQUMzQyx3Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0JztcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTXJTdGF0aWNMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9zdGF0aWMtbGF5b3V0LmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21yLXN0YXRpYy1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RhdGljLWxheW91dC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTXJTdGF0aWNMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBsYXlvdXRzQ29uZmlndXJhdGlvbjogTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICApIHtcbiAgICBzdXBlcihsYXlvdXRzQ29uZmlndXJhdGlvbi5nZXQoJ01yU3RhdGljTGF5b3V0Q29uZmlnJykgfHwgY29uZmlnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0UGF5bG9hZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29tbXVuaWNhdGlvbjogdGhpcy5jb21tdW5pY2F0aW9uLFxuICAgICAgcm91dGU6IHRoaXMucm91dGUsXG4gICAgICBvcHRpb25zOiB0aGlzLmNvbmZpZy5vcHRpb25zIHx8IHt9XG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMub25Jbml0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm9uRGVzdHJveSgpO1xuICB9XG59XG4iXX0=