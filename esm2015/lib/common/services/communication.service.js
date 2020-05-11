/**
 * @fileoverview added by tsickle
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
        /** @type {?} */
        const activeProviderConfig = this.communicationConfig.providers[activeProvider];
        if (!activeProviderConfig) {
            throw Error(`There is no config for "${activeProvider}" provider`);
        }
        // provider.type control for retrocompatibility
        /** @type {?} */
        const activeProviderType = activeProviderConfig.type || activeProvider;
        if (!this[activeProviderType]) {
            throw Error(`There is no "${activeProviderType}" provider type`);
        }
        const { onError } = options;
        return this[activeProviderType].request$(activeProviderConfig, requestId, options)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbXVuaWNhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBYyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7Ozs7QUFLdkUsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7O0lBSy9CLFlBQ1UsTUFBNEIsRUFDNUIsTUFBc0IsRUFDdEIsSUFBa0I7UUFGbEIsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsU0FBSSxHQUFKLElBQUksQ0FBYztRQUUxQixJQUFJO1lBQ0YsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQztTQUNqRTtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osTUFBTSxLQUFLLENBQUMsb0RBQW9ELENBQUMsQ0FBQztTQUNuRTtJQUNILENBQUM7Ozs7Ozs7SUFFRCxRQUFRLENBQUMsU0FBUyxFQUFFLFVBQWUsRUFBRSxFQUFFLFFBQVM7O2NBQ3hDLGNBQWMsR0FBRyxRQUFRLElBQUksSUFBSSxDQUFDLGVBQWU7O2NBQ2pELG9CQUFvQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDO1FBRS9FLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUN6QixNQUFNLEtBQUssQ0FBQywyQkFBMkIsY0FBYyxZQUFZLENBQUMsQ0FBQztTQUNwRTs7O2NBR0ssa0JBQWtCLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxJQUFJLGNBQWM7UUFFdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO1lBQzdCLE1BQU0sS0FBSyxDQUFDLGdCQUFnQixrQkFBa0IsaUJBQWlCLENBQUMsQ0FBQztTQUNsRTtjQUVLLEVBQUUsT0FBTyxFQUFFLEdBQUcsT0FBTztRQUMzQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDO2FBQy9FLElBQUksQ0FDSCxVQUFVOzs7O1FBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxFQUFDLENBQ3hELENBQUM7SUFDTixDQUFDOzs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBSyxFQUFFLE9BQU87UUFDeEIsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEI7YUFBTTtZQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsNENBQTRDLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDbkU7UUFFRCxPQUFPLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7OztZQW5ERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFOUSxvQkFBb0I7WUFDcEIsY0FBYztZQUNkLFlBQVk7Ozs7Ozs7O0lBTW5CLCtDQUFnQzs7Ozs7SUFFaEMsbURBQWlDOzs7OztJQUcvQixzQ0FBb0M7Ozs7O0lBQ3BDLHNDQUE4Qjs7Ozs7SUFDOUIsb0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGVtcHR5IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4vY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnLi9jb21tdW5pY2F0aW9uLXByb3ZpZGVycy9hcG9sbG8ucHJvdmlkZXInO1xuaW1wb3J0IHsgUmVzdFByb3ZpZGVyIH0gZnJvbSAnLi9jb21tdW5pY2F0aW9uLXByb3ZpZGVycy9yZXN0LnByb3ZpZGVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbW11bmljYXRpb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBkZWZhdWx0UHJvdmlkZXI6IHN0cmluZztcblxuICBwcml2YXRlIGNvbW11bmljYXRpb25Db25maWc6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZzogQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhcG9sbG86IEFwb2xsb1Byb3ZpZGVyLFxuICAgIHByaXZhdGUgcmVzdDogUmVzdFByb3ZpZGVyLFxuICApIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5jb21tdW5pY2F0aW9uQ29uZmlnID0gdGhpcy5jb25maWcuZ2V0KCdjb21tdW5pY2F0aW9uJyk7XG4gICAgICB0aGlzLmRlZmF1bHRQcm92aWRlciA9IHRoaXMuY29tbXVuaWNhdGlvbkNvbmZpZy5kZWZhdWx0UHJvdmlkZXI7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aHJvdyBFcnJvcignTm8gY29tbXVuaWNhdGlvbnMuZGVmYXVsdFByb3ZpZGVyIHNldHRlZCBpbiBjb25maWcnKTtcbiAgICB9XG4gIH1cblxuICByZXF1ZXN0JChyZXF1ZXN0SWQsIG9wdGlvbnM6IGFueSA9IHt9LCBwcm92aWRlcj8pIHtcbiAgICBjb25zdCBhY3RpdmVQcm92aWRlciA9IHByb3ZpZGVyIHx8IHRoaXMuZGVmYXVsdFByb3ZpZGVyO1xuICAgIGNvbnN0IGFjdGl2ZVByb3ZpZGVyQ29uZmlnID0gdGhpcy5jb21tdW5pY2F0aW9uQ29uZmlnLnByb3ZpZGVyc1thY3RpdmVQcm92aWRlcl07XG5cbiAgICBpZiAoIWFjdGl2ZVByb3ZpZGVyQ29uZmlnKSB7XG4gICAgICB0aHJvdyBFcnJvcihgVGhlcmUgaXMgbm8gY29uZmlnIGZvciBcIiR7YWN0aXZlUHJvdmlkZXJ9XCIgcHJvdmlkZXJgKTtcbiAgICB9XG5cbiAgICAvLyBwcm92aWRlci50eXBlIGNvbnRyb2wgZm9yIHJldHJvY29tcGF0aWJpbGl0eVxuICAgIGNvbnN0IGFjdGl2ZVByb3ZpZGVyVHlwZSA9IGFjdGl2ZVByb3ZpZGVyQ29uZmlnLnR5cGUgfHwgYWN0aXZlUHJvdmlkZXI7XG5cbiAgICBpZiAoIXRoaXNbYWN0aXZlUHJvdmlkZXJUeXBlXSkge1xuICAgICAgdGhyb3cgRXJyb3IoYFRoZXJlIGlzIG5vIFwiJHthY3RpdmVQcm92aWRlclR5cGV9XCIgcHJvdmlkZXIgdHlwZWApO1xuICAgIH1cblxuICAgIGNvbnN0IHsgb25FcnJvciB9ID0gb3B0aW9ucztcbiAgICByZXR1cm4gdGhpc1thY3RpdmVQcm92aWRlclR5cGVdLnJlcXVlc3QkKGFjdGl2ZVByb3ZpZGVyQ29uZmlnLCByZXF1ZXN0SWQsIG9wdGlvbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsIG9uRXJyb3IpKSxcbiAgICAgICk7XG4gIH1cblxuICBoYW5kbGVFcnJvcihlcnJvciwgb25FcnJvcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgaWYgKG9uRXJyb3IpIHtcbiAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oJ05vIGVycm9yIGhhbmRsZXIgZm9yIGNvbW11bmljYXRpb24gcmVxdWVzdCcsIGVycm9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW1wdHkoKTtcbiAgfVxufVxuIl19