/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/services/communication.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { empty } from 'rxjs';
import { ConfigurationService } from './configuration.service';
import { ApolloProvider } from './communication-providers/apollo/apollo.provider';
import { RestProvider } from './communication-providers/rest/rest.provider';
import * as i0 from "@angular/core";
import * as i1 from "./configuration.service";
import * as i2 from "./communication-providers/apollo/apollo.provider";
import * as i3 from "./communication-providers/rest/rest.provider";
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
        if (!this[activeProvider])
            throw Error("There is no " + activeProvider + " provider");
        var onError = options.onError;
        return this[activeProvider].request$(requestId, options)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbXVuaWNhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQWMsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNsRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOENBQThDLENBQUM7Ozs7O0FBRTVFO0lBUUUsOEJBQ1UsTUFBNEIsRUFDNUIsTUFBc0IsRUFDdEIsSUFBa0I7UUFGbEIsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsU0FBSSxHQUFKLElBQUksQ0FBYztRQUUxQixJQUFJO1lBQ0YsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQztTQUNqRTtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osTUFBTSxLQUFLLENBQUMsb0RBQW9ELENBQUMsQ0FBQztTQUNuRTtJQUNILENBQUM7Ozs7Ozs7SUFFRCx1Q0FBUTs7Ozs7O0lBQVIsVUFBUyxTQUFTLEVBQUUsT0FBaUIsRUFBRSxRQUFTO1FBQWhELGlCQVNDO1FBVG1CLHdCQUFBLEVBQUEsWUFBaUI7O1lBQzdCLGNBQWMsR0FBRyxRQUFRLElBQUksSUFBSSxDQUFDLGVBQWU7UUFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7WUFBRSxNQUFNLEtBQUssQ0FBQyxpQkFBZSxjQUFjLGNBQVcsQ0FBQyxDQUFDO1FBRXpFLElBQUEseUJBQU87UUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQzthQUNyRCxJQUFJLENBQ0gsVUFBVTs7OztRQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQWhDLENBQWdDLEVBQUMsQ0FDeEQsQ0FBQztJQUNOLENBQUM7Ozs7OztJQUVELDBDQUFXOzs7OztJQUFYLFVBQVksS0FBSyxFQUFFLE9BQU87UUFDeEIsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEI7YUFBTTtZQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsNENBQTRDLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDbkU7UUFFRCxPQUFPLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7O2dCQXhDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQU5RLG9CQUFvQjtnQkFDcEIsY0FBYztnQkFDZCxZQUFZOzs7K0JBTHJCO0NBZ0RDLEFBekNELElBeUNDO1NBdENZLG9CQUFvQjs7Ozs7O0lBQy9CLCtDQUFnQzs7Ozs7SUFFaEMsbURBQWlDOzs7OztJQUcvQixzQ0FBb0M7Ozs7O0lBQ3BDLHNDQUE4Qjs7Ozs7SUFDOUIsb0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBlbXB0eSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4vY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICcuL2NvbW11bmljYXRpb24tcHJvdmlkZXJzL2Fwb2xsby9hcG9sbG8ucHJvdmlkZXInO1xyXG5pbXBvcnQgeyBSZXN0UHJvdmlkZXIgfSBmcm9tICcuL2NvbW11bmljYXRpb24tcHJvdmlkZXJzL3Jlc3QvcmVzdC5wcm92aWRlcic7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tbXVuaWNhdGlvblNlcnZpY2Uge1xyXG4gIHByaXZhdGUgZGVmYXVsdFByb3ZpZGVyOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbkNvbmZpZzogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY29uZmlnOiBDb25maWd1cmF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgYXBvbGxvOiBBcG9sbG9Qcm92aWRlcixcclxuICAgIHByaXZhdGUgcmVzdDogUmVzdFByb3ZpZGVyLFxyXG4gICkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy5jb21tdW5pY2F0aW9uQ29uZmlnID0gdGhpcy5jb25maWcuZ2V0KCdjb21tdW5pY2F0aW9uJyk7XHJcbiAgICAgIHRoaXMuZGVmYXVsdFByb3ZpZGVyID0gdGhpcy5jb21tdW5pY2F0aW9uQ29uZmlnLmRlZmF1bHRQcm92aWRlcjtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB0aHJvdyBFcnJvcignTm8gY29tbXVuaWNhdGlvbnMuZGVmYXVsdFByb3ZpZGVyIHNldHRlZCBpbiBjb25maWcnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlcXVlc3QkKHJlcXVlc3RJZCwgb3B0aW9uczogYW55ID0ge30sIHByb3ZpZGVyPykge1xyXG4gICAgY29uc3QgYWN0aXZlUHJvdmlkZXIgPSBwcm92aWRlciB8fCB0aGlzLmRlZmF1bHRQcm92aWRlcjtcclxuICAgIGlmICghdGhpc1thY3RpdmVQcm92aWRlcl0pIHRocm93IEVycm9yKGBUaGVyZSBpcyBubyAke2FjdGl2ZVByb3ZpZGVyfSBwcm92aWRlcmApO1xyXG5cclxuICAgIGNvbnN0IHsgb25FcnJvciB9ID0gb3B0aW9ucztcclxuICAgIHJldHVybiB0aGlzW2FjdGl2ZVByb3ZpZGVyXS5yZXF1ZXN0JChyZXF1ZXN0SWQsIG9wdGlvbnMpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yLCBvbkVycm9yKSksXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVFcnJvcihlcnJvciwgb25FcnJvcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBpZiAob25FcnJvcikge1xyXG4gICAgICBvbkVycm9yKGVycm9yKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignTm8gZXJyb3IgaGFuZGxlciBmb3IgY29tbXVuaWNhdGlvbiByZXF1ZXN0JywgZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlbXB0eSgpO1xyXG4gIH1cclxufVxyXG4iXX0=