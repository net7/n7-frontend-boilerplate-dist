/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/services/communication.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { empty } from 'rxjs';
import { ConfigurationService } from './configuration.service';
import { ApolloProvider } from './communication-providers/apollo.provider';
import { RestProvider } from './communication-providers/rest.provider';
import * as i0 from "@angular/core";
import * as i1 from "./configuration.service";
import * as i2 from "./communication-providers/apollo.provider";
import * as i3 from "./communication-providers/rest.provider";
var CommunicationService = /** @class */ (function () {
    function CommunicationService(config, apollo, rest) {
        this.config = config;
        this.apollo = apollo;
        this.rest = rest;
        try {
            this.communicationConfig = this.config.get('communication');
            this.defaultProvider = this.communicationConfig.defaultProvider;
        }
        catch (err) {
            throw Error('No communications.defaultProvider setted in config');
        }
    }
    /**
     * @param {?} requestId
     * @param {?=} options
     * @param {?=} provider
     * @return {?}
     */
    CommunicationService.prototype.request$ = /**
     * @param {?} requestId
     * @param {?=} options
     * @param {?=} provider
     * @return {?}
     */
    function (requestId, options, provider) {
        var _this = this;
        if (options === void 0) { options = {}; }
        /** @type {?} */
        var activeProvider = provider || this.defaultProvider;
        /** @type {?} */
        var activeProviderConfig = this.communicationConfig.providers[activeProvider];
        if (!activeProviderConfig) {
            throw Error("There is no config for \"" + activeProvider + "\" provider");
        }
        // provider.type control for retrocompatibility
        /** @type {?} */
        var activeProviderType = activeProviderConfig.type || activeProvider;
        if (!this[activeProviderType]) {
            throw Error("There is no \"" + activeProviderType + "\" provider type");
        }
        var onError = options.onError;
        return this[activeProviderType].request$(activeProviderConfig, requestId, options)
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return _this.handleError(error, onError); })));
    };
    /**
     * @param {?} error
     * @param {?} onError
     * @return {?}
     */
    CommunicationService.prototype.handleError = /**
     * @param {?} error
     * @param {?} onError
     * @return {?}
     */
    function (error, onError) {
        if (onError) {
            onError(error);
        }
        else {
            console.warn('No error handler for communication request', error);
        }
        return empty();
    };
    CommunicationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CommunicationService.ctorParameters = function () { return [
        { type: ConfigurationService },
        { type: ApolloProvider },
        { type: RestProvider }
    ]; };
    /** @nocollapse */ CommunicationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CommunicationService_Factory() { return new CommunicationService(i0.ɵɵinject(i1.ConfigurationService), i0.ɵɵinject(i2.ApolloProvider), i0.ɵɵinject(i3.RestProvider)); }, token: CommunicationService, providedIn: "root" });
    return CommunicationService;
}());
export { CommunicationService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CommunicationService.prototype.defaultProvider;
    /**
     * @type {?}
     * @private
     */
    CommunicationService.prototype.communicationConfig;
    /**
     * @type {?}
     * @private
     */
    CommunicationService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    CommunicationService.prototype.apollo;
    /**
     * @type {?}
     * @private
     */
    CommunicationService.prototype.rest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbXVuaWNhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQWMsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUNBQXlDLENBQUM7Ozs7O0FBRXZFO0lBUUUsOEJBQ1UsTUFBNEIsRUFDNUIsTUFBc0IsRUFDdEIsSUFBa0I7UUFGbEIsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsU0FBSSxHQUFKLElBQUksQ0FBYztRQUUxQixJQUFJO1lBQ0YsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQztTQUNqRTtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osTUFBTSxLQUFLLENBQUMsb0RBQW9ELENBQUMsQ0FBQztTQUNuRTtJQUNILENBQUM7Ozs7Ozs7SUFFRCx1Q0FBUTs7Ozs7O0lBQVIsVUFBUyxTQUFTLEVBQUUsT0FBaUIsRUFBRSxRQUFTO1FBQWhELGlCQW9CQztRQXBCbUIsd0JBQUEsRUFBQSxZQUFpQjs7WUFDN0IsY0FBYyxHQUFHLFFBQVEsSUFBSSxJQUFJLENBQUMsZUFBZTs7WUFDakQsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUM7UUFFL0UsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQ3pCLE1BQU0sS0FBSyxDQUFDLDhCQUEyQixjQUFjLGdCQUFZLENBQUMsQ0FBQztTQUNwRTs7O1lBR0ssa0JBQWtCLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxJQUFJLGNBQWM7UUFFdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO1lBQzdCLE1BQU0sS0FBSyxDQUFDLG1CQUFnQixrQkFBa0IscUJBQWlCLENBQUMsQ0FBQztTQUNsRTtRQUVPLElBQUEseUJBQU87UUFDZixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDO2FBQy9FLElBQUksQ0FDSCxVQUFVOzs7O1FBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsRUFBaEMsQ0FBZ0MsRUFBQyxDQUN4RCxDQUFDO0lBQ04sQ0FBQzs7Ozs7O0lBRUQsMENBQVc7Ozs7O0lBQVgsVUFBWSxLQUFLLEVBQUUsT0FBTztRQUN4QixJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQjthQUFNO1lBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyw0Q0FBNEMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNuRTtRQUVELE9BQU8sS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7Z0JBbkRGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTlEsb0JBQW9CO2dCQUNwQixjQUFjO2dCQUNkLFlBQVk7OzsrQkFMckI7Q0EyREMsQUFwREQsSUFvREM7U0FqRFksb0JBQW9COzs7Ozs7SUFDL0IsK0NBQWdDOzs7OztJQUVoQyxtREFBaUM7Ozs7O0lBRy9CLHNDQUFvQzs7Ozs7SUFDcEMsc0NBQThCOzs7OztJQUM5QixvQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZW1wdHkgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICcuL2NvbW11bmljYXRpb24tcHJvdmlkZXJzL2Fwb2xsby5wcm92aWRlcic7XG5pbXBvcnQgeyBSZXN0UHJvdmlkZXIgfSBmcm9tICcuL2NvbW11bmljYXRpb24tcHJvdmlkZXJzL3Jlc3QucHJvdmlkZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ29tbXVuaWNhdGlvblNlcnZpY2Uge1xuICBwcml2YXRlIGRlZmF1bHRQcm92aWRlcjogc3RyaW5nO1xuXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbkNvbmZpZzogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGFwb2xsbzogQXBvbGxvUHJvdmlkZXIsXG4gICAgcHJpdmF0ZSByZXN0OiBSZXN0UHJvdmlkZXIsXG4gICkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmNvbW11bmljYXRpb25Db25maWcgPSB0aGlzLmNvbmZpZy5nZXQoJ2NvbW11bmljYXRpb24nKTtcbiAgICAgIHRoaXMuZGVmYXVsdFByb3ZpZGVyID0gdGhpcy5jb21tdW5pY2F0aW9uQ29uZmlnLmRlZmF1bHRQcm92aWRlcjtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRocm93IEVycm9yKCdObyBjb21tdW5pY2F0aW9ucy5kZWZhdWx0UHJvdmlkZXIgc2V0dGVkIGluIGNvbmZpZycpO1xuICAgIH1cbiAgfVxuXG4gIHJlcXVlc3QkKHJlcXVlc3RJZCwgb3B0aW9uczogYW55ID0ge30sIHByb3ZpZGVyPykge1xuICAgIGNvbnN0IGFjdGl2ZVByb3ZpZGVyID0gcHJvdmlkZXIgfHwgdGhpcy5kZWZhdWx0UHJvdmlkZXI7XG4gICAgY29uc3QgYWN0aXZlUHJvdmlkZXJDb25maWcgPSB0aGlzLmNvbW11bmljYXRpb25Db25maWcucHJvdmlkZXJzW2FjdGl2ZVByb3ZpZGVyXTtcblxuICAgIGlmICghYWN0aXZlUHJvdmlkZXJDb25maWcpIHtcbiAgICAgIHRocm93IEVycm9yKGBUaGVyZSBpcyBubyBjb25maWcgZm9yIFwiJHthY3RpdmVQcm92aWRlcn1cIiBwcm92aWRlcmApO1xuICAgIH1cblxuICAgIC8vIHByb3ZpZGVyLnR5cGUgY29udHJvbCBmb3IgcmV0cm9jb21wYXRpYmlsaXR5XG4gICAgY29uc3QgYWN0aXZlUHJvdmlkZXJUeXBlID0gYWN0aXZlUHJvdmlkZXJDb25maWcudHlwZSB8fCBhY3RpdmVQcm92aWRlcjtcblxuICAgIGlmICghdGhpc1thY3RpdmVQcm92aWRlclR5cGVdKSB7XG4gICAgICB0aHJvdyBFcnJvcihgVGhlcmUgaXMgbm8gXCIke2FjdGl2ZVByb3ZpZGVyVHlwZX1cIiBwcm92aWRlciB0eXBlYCk7XG4gICAgfVxuXG4gICAgY29uc3QgeyBvbkVycm9yIH0gPSBvcHRpb25zO1xuICAgIHJldHVybiB0aGlzW2FjdGl2ZVByb3ZpZGVyVHlwZV0ucmVxdWVzdCQoYWN0aXZlUHJvdmlkZXJDb25maWcsIHJlcXVlc3RJZCwgb3B0aW9ucylcbiAgICAgIC5waXBlKFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvciwgb25FcnJvcikpLFxuICAgICAgKTtcbiAgfVxuXG4gIGhhbmRsZUVycm9yKGVycm9yLCBvbkVycm9yKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBpZiAob25FcnJvcikge1xuICAgICAgb25FcnJvcihlcnJvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignTm8gZXJyb3IgaGFuZGxlciBmb3IgY29tbXVuaWNhdGlvbiByZXF1ZXN0JywgZXJyb3IpO1xuICAgIH1cblxuICAgIHJldHVybiBlbXB0eSgpO1xuICB9XG59XG4iXX0=