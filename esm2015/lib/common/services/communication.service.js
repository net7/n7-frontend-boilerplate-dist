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
export class CommunicationService {
    /**
     * @param {?} config
     * @param {?} apollo
     * @param {?} rest
     */
    constructor(config, apollo, rest) {
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
    request$(requestId, options = {}, provider) {
        /** @type {?} */
        const activeProvider = provider || this.defaultProvider;
        if (!this[activeProvider])
            throw Error(`There is no ${activeProvider} provider`);
        const { onError } = options;
        return this[activeProvider].request$(requestId, options)
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => this.handleError(error, onError))));
    }
    /**
     * @param {?} error
     * @param {?} onError
     * @return {?}
     */
    handleError(error, onError) {
        if (onError) {
            onError(error);
        }
        else {
            console.warn('No error handler for communication request', error);
        }
        return empty();
    }
}
CommunicationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CommunicationService.ctorParameters = () => [
    { type: ConfigurationService },
    { type: ApolloProvider },
    { type: RestProvider }
];
/** @nocollapse */ CommunicationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CommunicationService_Factory() { return new CommunicationService(i0.ɵɵinject(i1.ConfigurationService), i0.ɵɵinject(i2.ApolloProvider), i0.ɵɵinject(i3.RestProvider)); }, token: CommunicationService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbXVuaWNhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBYyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7Ozs7QUFLNUUsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7O0lBSy9CLFlBQ1UsTUFBNEIsRUFDNUIsTUFBc0IsRUFDdEIsSUFBa0I7UUFGbEIsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsU0FBSSxHQUFKLElBQUksQ0FBYztRQUUxQixJQUFJO1lBQ0YsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQztTQUNqRTtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osTUFBTSxLQUFLLENBQUMsb0RBQW9ELENBQUMsQ0FBQztTQUNuRTtJQUNILENBQUM7Ozs7Ozs7SUFFRCxRQUFRLENBQUMsU0FBUyxFQUFFLFVBQWUsRUFBRSxFQUFFLFFBQVM7O2NBQ3hDLGNBQWMsR0FBRyxRQUFRLElBQUksSUFBSSxDQUFDLGVBQWU7UUFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7WUFBRSxNQUFNLEtBQUssQ0FBQyxlQUFlLGNBQWMsV0FBVyxDQUFDLENBQUM7Y0FFM0UsRUFBRSxPQUFPLEVBQUUsR0FBRyxPQUFPO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDO2FBQ3JELElBQUksQ0FDSCxVQUFVOzs7O1FBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxFQUFDLENBQ3hELENBQUM7SUFDTixDQUFDOzs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBSyxFQUFFLE9BQU87UUFDeEIsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEI7YUFBTTtZQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsNENBQTRDLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDbkU7UUFFRCxPQUFPLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7OztZQXhDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFOUSxvQkFBb0I7WUFDcEIsY0FBYztZQUNkLFlBQVk7Ozs7Ozs7O0lBTW5CLCtDQUFnQzs7Ozs7SUFFaEMsbURBQWlDOzs7OztJQUcvQixzQ0FBb0M7Ozs7O0lBQ3BDLHNDQUE4Qjs7Ozs7SUFDOUIsb0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGVtcHR5IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4vY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnLi9jb21tdW5pY2F0aW9uLXByb3ZpZGVycy9hcG9sbG8vYXBvbGxvLnByb3ZpZGVyJztcbmltcG9ydCB7IFJlc3RQcm92aWRlciB9IGZyb20gJy4vY29tbXVuaWNhdGlvbi1wcm92aWRlcnMvcmVzdC9yZXN0LnByb3ZpZGVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbW11bmljYXRpb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBkZWZhdWx0UHJvdmlkZXI6IHN0cmluZztcblxuICBwcml2YXRlIGNvbW11bmljYXRpb25Db25maWc6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZzogQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhcG9sbG86IEFwb2xsb1Byb3ZpZGVyLFxuICAgIHByaXZhdGUgcmVzdDogUmVzdFByb3ZpZGVyLFxuICApIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5jb21tdW5pY2F0aW9uQ29uZmlnID0gdGhpcy5jb25maWcuZ2V0KCdjb21tdW5pY2F0aW9uJyk7XG4gICAgICB0aGlzLmRlZmF1bHRQcm92aWRlciA9IHRoaXMuY29tbXVuaWNhdGlvbkNvbmZpZy5kZWZhdWx0UHJvdmlkZXI7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aHJvdyBFcnJvcignTm8gY29tbXVuaWNhdGlvbnMuZGVmYXVsdFByb3ZpZGVyIHNldHRlZCBpbiBjb25maWcnKTtcbiAgICB9XG4gIH1cblxuICByZXF1ZXN0JChyZXF1ZXN0SWQsIG9wdGlvbnM6IGFueSA9IHt9LCBwcm92aWRlcj8pIHtcbiAgICBjb25zdCBhY3RpdmVQcm92aWRlciA9IHByb3ZpZGVyIHx8IHRoaXMuZGVmYXVsdFByb3ZpZGVyO1xuICAgIGlmICghdGhpc1thY3RpdmVQcm92aWRlcl0pIHRocm93IEVycm9yKGBUaGVyZSBpcyBubyAke2FjdGl2ZVByb3ZpZGVyfSBwcm92aWRlcmApO1xuXG4gICAgY29uc3QgeyBvbkVycm9yIH0gPSBvcHRpb25zO1xuICAgIHJldHVybiB0aGlzW2FjdGl2ZVByb3ZpZGVyXS5yZXF1ZXN0JChyZXF1ZXN0SWQsIG9wdGlvbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsIG9uRXJyb3IpKSxcbiAgICAgICk7XG4gIH1cblxuICBoYW5kbGVFcnJvcihlcnJvciwgb25FcnJvcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgaWYgKG9uRXJyb3IpIHtcbiAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oJ05vIGVycm9yIGhhbmRsZXIgZm9yIGNvbW11bmljYXRpb24gcmVxdWVzdCcsIGVycm9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW1wdHkoKTtcbiAgfVxufVxuIl19