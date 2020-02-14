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
        provider = provider || this.defaultProvider;
        if (!this[provider])
            throw Error(`There is no ${provider} provider`);
        const { onError } = options;
        return this[provider].request$(requestId, options)
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
                providedIn: 'root'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbXVuaWNhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFjLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFLekMsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7O0lBSS9CLFlBQ1UsTUFBNEIsRUFDNUIsTUFBc0IsRUFDdEIsSUFBa0I7UUFGbEIsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsU0FBSSxHQUFKLElBQUksQ0FBYztRQUUxQixJQUFJO1lBQ0YsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQztTQUNqRTtRQUFDLE9BQU0sR0FBRyxFQUFFO1lBQ1gsTUFBTSxLQUFLLENBQUMsb0RBQW9ELENBQUMsQ0FBQztTQUNuRTtJQUNILENBQUM7Ozs7Ozs7SUFFRCxRQUFRLENBQUMsU0FBUyxFQUFFLFVBQWUsRUFBRSxFQUFFLFFBQVM7UUFDOUMsUUFBUSxHQUFHLFFBQVEsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzVDLElBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQUUsTUFBTSxLQUFLLENBQUMsZUFBZSxRQUFRLFdBQVcsQ0FBQyxDQUFDO2NBRTlELEVBQUUsT0FBTyxFQUFFLEdBQUcsT0FBTztRQUMzQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQzthQUMvQyxJQUFJLENBQ0gsVUFBVTs7OztRQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsRUFBQyxDQUN4RCxDQUFDO0lBQ04sQ0FBQzs7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQUssRUFBRSxPQUFPO1FBQ3hCLElBQUcsT0FBTyxFQUFDO1lBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hCO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLDRDQUE0QyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ25FO1FBRUQsT0FBTyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7WUF2Q0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUlEsb0JBQW9CO1lBQ3BCLGNBQWM7WUFDZCxZQUFZOzs7Ozs7OztJQVFuQiwrQ0FBZ0M7Ozs7O0lBQ2hDLG1EQUFpQzs7Ozs7SUFHL0Isc0NBQW9DOzs7OztJQUNwQyxzQ0FBOEI7Ozs7O0lBQzlCLG9DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICcuL2NvbW11bmljYXRpb24tcHJvdmlkZXJzL2Fwb2xsby9hcG9sbG8ucHJvdmlkZXInO1xuaW1wb3J0IHsgUmVzdFByb3ZpZGVyIH0gZnJvbSAnLi9jb21tdW5pY2F0aW9uLXByb3ZpZGVycy9yZXN0L3Jlc3QucHJvdmlkZXInO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGVtcHR5IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvbW11bmljYXRpb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBkZWZhdWx0UHJvdmlkZXI6IHN0cmluZztcbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uQ29uZmlnOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWc6IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgYXBvbGxvOiBBcG9sbG9Qcm92aWRlcixcbiAgICBwcml2YXRlIHJlc3Q6IFJlc3RQcm92aWRlcixcbiAgKXtcbiAgICB0cnkge1xuICAgICAgdGhpcy5jb21tdW5pY2F0aW9uQ29uZmlnID0gdGhpcy5jb25maWcuZ2V0KCdjb21tdW5pY2F0aW9uJyk7XG4gICAgICB0aGlzLmRlZmF1bHRQcm92aWRlciA9IHRoaXMuY29tbXVuaWNhdGlvbkNvbmZpZy5kZWZhdWx0UHJvdmlkZXI7XG4gICAgfSBjYXRjaChlcnIpIHtcbiAgICAgIHRocm93IEVycm9yKCdObyBjb21tdW5pY2F0aW9ucy5kZWZhdWx0UHJvdmlkZXIgc2V0dGVkIGluIGNvbmZpZycpO1xuICAgIH1cbiAgfVxuXG4gIHJlcXVlc3QkKHJlcXVlc3RJZCwgb3B0aW9uczogYW55ID0ge30sIHByb3ZpZGVyPyl7XG4gICAgcHJvdmlkZXIgPSBwcm92aWRlciB8fCB0aGlzLmRlZmF1bHRQcm92aWRlcjtcbiAgICBpZighdGhpc1twcm92aWRlcl0pIHRocm93IEVycm9yKGBUaGVyZSBpcyBubyAke3Byb3ZpZGVyfSBwcm92aWRlcmApO1xuXG4gICAgY29uc3QgeyBvbkVycm9yIH0gPSBvcHRpb25zO1xuICAgIHJldHVybiB0aGlzW3Byb3ZpZGVyXS5yZXF1ZXN0JChyZXF1ZXN0SWQsIG9wdGlvbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsIG9uRXJyb3IpKVxuICAgICAgKTtcbiAgfVxuXG4gIGhhbmRsZUVycm9yKGVycm9yLCBvbkVycm9yKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBpZihvbkVycm9yKXtcbiAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oJ05vIGVycm9yIGhhbmRsZXIgZm9yIGNvbW11bmljYXRpb24gcmVxdWVzdCcsIGVycm9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW1wdHkoKTtcbiAgfVxufSJdfQ==