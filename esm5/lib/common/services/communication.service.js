/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbXVuaWNhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBYyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7Ozs7QUFFNUU7SUFRRSw4QkFDVSxNQUE0QixFQUM1QixNQUFzQixFQUN0QixJQUFrQjtRQUZsQixXQUFNLEdBQU4sTUFBTSxDQUFzQjtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QixTQUFJLEdBQUosSUFBSSxDQUFjO1FBRTFCLElBQUk7WUFDRixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDO1NBQ2pFO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixNQUFNLEtBQUssQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO1NBQ25FO0lBQ0gsQ0FBQzs7Ozs7OztJQUVELHVDQUFROzs7Ozs7SUFBUixVQUFTLFNBQVMsRUFBRSxPQUFpQixFQUFFLFFBQVM7UUFBaEQsaUJBU0M7UUFUbUIsd0JBQUEsRUFBQSxZQUFpQjs7WUFDN0IsY0FBYyxHQUFHLFFBQVEsSUFBSSxJQUFJLENBQUMsZUFBZTtRQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUFFLE1BQU0sS0FBSyxDQUFDLGlCQUFlLGNBQWMsY0FBVyxDQUFDLENBQUM7UUFFekUsSUFBQSx5QkFBTztRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDO2FBQ3JELElBQUksQ0FDSCxVQUFVOzs7O1FBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsRUFBaEMsQ0FBZ0MsRUFBQyxDQUN4RCxDQUFDO0lBQ04sQ0FBQzs7Ozs7O0lBRUQsMENBQVc7Ozs7O0lBQVgsVUFBWSxLQUFLLEVBQUUsT0FBTztRQUN4QixJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQjthQUFNO1lBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyw0Q0FBNEMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNuRTtRQUVELE9BQU8sS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7Z0JBeENGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTlEsb0JBQW9CO2dCQUNwQixjQUFjO2dCQUNkLFlBQVk7OzsrQkFMckI7Q0FnREMsQUF6Q0QsSUF5Q0M7U0F0Q1ksb0JBQW9COzs7Ozs7SUFDL0IsK0NBQWdDOzs7OztJQUVoQyxtREFBaUM7Ozs7O0lBRy9CLHNDQUFvQzs7Ozs7SUFDcEMsc0NBQThCOzs7OztJQUM5QixvQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZW1wdHkgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICcuL2NvbW11bmljYXRpb24tcHJvdmlkZXJzL2Fwb2xsby9hcG9sbG8ucHJvdmlkZXInO1xuaW1wb3J0IHsgUmVzdFByb3ZpZGVyIH0gZnJvbSAnLi9jb21tdW5pY2F0aW9uLXByb3ZpZGVycy9yZXN0L3Jlc3QucHJvdmlkZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ29tbXVuaWNhdGlvblNlcnZpY2Uge1xuICBwcml2YXRlIGRlZmF1bHRQcm92aWRlcjogc3RyaW5nO1xuXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbkNvbmZpZzogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGFwb2xsbzogQXBvbGxvUHJvdmlkZXIsXG4gICAgcHJpdmF0ZSByZXN0OiBSZXN0UHJvdmlkZXIsXG4gICkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmNvbW11bmljYXRpb25Db25maWcgPSB0aGlzLmNvbmZpZy5nZXQoJ2NvbW11bmljYXRpb24nKTtcbiAgICAgIHRoaXMuZGVmYXVsdFByb3ZpZGVyID0gdGhpcy5jb21tdW5pY2F0aW9uQ29uZmlnLmRlZmF1bHRQcm92aWRlcjtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRocm93IEVycm9yKCdObyBjb21tdW5pY2F0aW9ucy5kZWZhdWx0UHJvdmlkZXIgc2V0dGVkIGluIGNvbmZpZycpO1xuICAgIH1cbiAgfVxuXG4gIHJlcXVlc3QkKHJlcXVlc3RJZCwgb3B0aW9uczogYW55ID0ge30sIHByb3ZpZGVyPykge1xuICAgIGNvbnN0IGFjdGl2ZVByb3ZpZGVyID0gcHJvdmlkZXIgfHwgdGhpcy5kZWZhdWx0UHJvdmlkZXI7XG4gICAgaWYgKCF0aGlzW2FjdGl2ZVByb3ZpZGVyXSkgdGhyb3cgRXJyb3IoYFRoZXJlIGlzIG5vICR7YWN0aXZlUHJvdmlkZXJ9IHByb3ZpZGVyYCk7XG5cbiAgICBjb25zdCB7IG9uRXJyb3IgfSA9IG9wdGlvbnM7XG4gICAgcmV0dXJuIHRoaXNbYWN0aXZlUHJvdmlkZXJdLnJlcXVlc3QkKHJlcXVlc3RJZCwgb3B0aW9ucylcbiAgICAgIC5waXBlKFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvciwgb25FcnJvcikpLFxuICAgICAgKTtcbiAgfVxuXG4gIGhhbmRsZUVycm9yKGVycm9yLCBvbkVycm9yKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBpZiAob25FcnJvcikge1xuICAgICAgb25FcnJvcihlcnJvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignTm8gZXJyb3IgaGFuZGxlciBmb3IgY29tbXVuaWNhdGlvbiByZXF1ZXN0JywgZXJyb3IpO1xuICAgIH1cblxuICAgIHJldHVybiBlbXB0eSgpO1xuICB9XG59XG4iXX0=