/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import { ApolloProvider } from './communication-providers/apollo/apollo.provider';
import { RestProvider } from './communication-providers/rest/rest.provider';
import { catchError } from 'rxjs/operators';
import { empty } from 'rxjs';
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
        provider = provider || this.defaultProvider;
        if (!this[provider])
            throw Error("There is no " + provider + " provider");
        var onError = options.onError;
        return this[provider].request$(requestId, options)
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
                    providedIn: 'root'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbXVuaWNhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFjLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFFekM7SUFPRSw4QkFDVSxNQUE0QixFQUM1QixNQUFzQixFQUN0QixJQUFrQjtRQUZsQixXQUFNLEdBQU4sTUFBTSxDQUFzQjtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QixTQUFJLEdBQUosSUFBSSxDQUFjO1FBRTFCLElBQUk7WUFDRixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDO1NBQ2pFO1FBQUMsT0FBTSxHQUFHLEVBQUU7WUFDWCxNQUFNLEtBQUssQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO1NBQ25FO0lBQ0gsQ0FBQzs7Ozs7OztJQUVELHVDQUFROzs7Ozs7SUFBUixVQUFTLFNBQVMsRUFBRSxPQUFpQixFQUFFLFFBQVM7UUFBaEQsaUJBU0M7UUFUbUIsd0JBQUEsRUFBQSxZQUFpQjtRQUNuQyxRQUFRLEdBQUcsUUFBUSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDNUMsSUFBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFBRSxNQUFNLEtBQUssQ0FBQyxpQkFBZSxRQUFRLGNBQVcsQ0FBQyxDQUFDO1FBRTVELElBQUEseUJBQU87UUFDZixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQzthQUMvQyxJQUFJLENBQ0gsVUFBVTs7OztRQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQWhDLENBQWdDLEVBQUMsQ0FDeEQsQ0FBQztJQUNOLENBQUM7Ozs7OztJQUVELDBDQUFXOzs7OztJQUFYLFVBQVksS0FBSyxFQUFFLE9BQU87UUFDeEIsSUFBRyxPQUFPLEVBQUM7WUFDVCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEI7YUFBTTtZQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsNENBQTRDLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDbkU7UUFFRCxPQUFPLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7O2dCQXZDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVJRLG9CQUFvQjtnQkFDcEIsY0FBYztnQkFDZCxZQUFZOzs7K0JBSHJCO0NBK0NDLEFBeENELElBd0NDO1NBckNZLG9CQUFvQjs7Ozs7O0lBQy9CLCtDQUFnQzs7Ozs7SUFDaEMsbURBQWlDOzs7OztJQUcvQixzQ0FBb0M7Ozs7O0lBQ3BDLHNDQUE4Qjs7Ozs7SUFDOUIsb0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gJy4vY29tbXVuaWNhdGlvbi1wcm92aWRlcnMvYXBvbGxvL2Fwb2xsby5wcm92aWRlcic7XG5pbXBvcnQgeyBSZXN0UHJvdmlkZXIgfSBmcm9tICcuL2NvbW11bmljYXRpb24tcHJvdmlkZXJzL3Jlc3QvcmVzdC5wcm92aWRlcic7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZW1wdHkgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29tbXVuaWNhdGlvblNlcnZpY2Uge1xuICBwcml2YXRlIGRlZmF1bHRQcm92aWRlcjogc3RyaW5nO1xuICBwcml2YXRlIGNvbW11bmljYXRpb25Db25maWc6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZzogQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhcG9sbG86IEFwb2xsb1Byb3ZpZGVyLFxuICAgIHByaXZhdGUgcmVzdDogUmVzdFByb3ZpZGVyLFxuICApe1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmNvbW11bmljYXRpb25Db25maWcgPSB0aGlzLmNvbmZpZy5nZXQoJ2NvbW11bmljYXRpb24nKTtcbiAgICAgIHRoaXMuZGVmYXVsdFByb3ZpZGVyID0gdGhpcy5jb21tdW5pY2F0aW9uQ29uZmlnLmRlZmF1bHRQcm92aWRlcjtcbiAgICB9IGNhdGNoKGVycikge1xuICAgICAgdGhyb3cgRXJyb3IoJ05vIGNvbW11bmljYXRpb25zLmRlZmF1bHRQcm92aWRlciBzZXR0ZWQgaW4gY29uZmlnJyk7XG4gICAgfVxuICB9XG5cbiAgcmVxdWVzdCQocmVxdWVzdElkLCBvcHRpb25zOiBhbnkgPSB7fSwgcHJvdmlkZXI/KXtcbiAgICBwcm92aWRlciA9IHByb3ZpZGVyIHx8IHRoaXMuZGVmYXVsdFByb3ZpZGVyO1xuICAgIGlmKCF0aGlzW3Byb3ZpZGVyXSkgdGhyb3cgRXJyb3IoYFRoZXJlIGlzIG5vICR7cHJvdmlkZXJ9IHByb3ZpZGVyYCk7XG5cbiAgICBjb25zdCB7IG9uRXJyb3IgfSA9IG9wdGlvbnM7XG4gICAgcmV0dXJuIHRoaXNbcHJvdmlkZXJdLnJlcXVlc3QkKHJlcXVlc3RJZCwgb3B0aW9ucylcbiAgICAgIC5waXBlKFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvciwgb25FcnJvcikpXG4gICAgICApO1xuICB9XG5cbiAgaGFuZGxlRXJyb3IoZXJyb3IsIG9uRXJyb3IpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGlmKG9uRXJyb3Ipe1xuICAgICAgb25FcnJvcihlcnJvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignTm8gZXJyb3IgaGFuZGxlciBmb3IgY29tbXVuaWNhdGlvbiByZXF1ZXN0JywgZXJyb3IpO1xuICAgIH1cblxuICAgIHJldHVybiBlbXB0eSgpO1xuICB9XG59Il19