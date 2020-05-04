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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbXVuaWNhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQWMsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUNBQXlDLENBQUM7Ozs7O0FBS3ZFLE1BQU0sT0FBTyxvQkFBb0I7Ozs7OztJQUsvQixZQUNVLE1BQTRCLEVBQzVCLE1BQXNCLEVBQ3RCLElBQWtCO1FBRmxCLFdBQU0sR0FBTixNQUFNLENBQXNCO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLFNBQUksR0FBSixJQUFJLENBQWM7UUFFMUIsSUFBSTtZQUNGLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUM7U0FDakU7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE1BQU0sS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7U0FDbkU7SUFDSCxDQUFDOzs7Ozs7O0lBRUQsUUFBUSxDQUFDLFNBQVMsRUFBRSxVQUFlLEVBQUUsRUFBRSxRQUFTOztjQUN4QyxjQUFjLEdBQUcsUUFBUSxJQUFJLElBQUksQ0FBQyxlQUFlOztjQUNqRCxvQkFBb0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQztRQUUvRSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDekIsTUFBTSxLQUFLLENBQUMsMkJBQTJCLGNBQWMsWUFBWSxDQUFDLENBQUM7U0FDcEU7OztjQUdLLGtCQUFrQixHQUFHLG9CQUFvQixDQUFDLElBQUksSUFBSSxjQUFjO1FBRXRFLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUM3QixNQUFNLEtBQUssQ0FBQyxnQkFBZ0Isa0JBQWtCLGlCQUFpQixDQUFDLENBQUM7U0FDbEU7Y0FFSyxFQUFFLE9BQU8sRUFBRSxHQUFHLE9BQU87UUFDM0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQzthQUMvRSxJQUFJLENBQ0gsVUFBVTs7OztRQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsRUFBQyxDQUN4RCxDQUFDO0lBQ04sQ0FBQzs7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQUssRUFBRSxPQUFPO1FBQ3hCLElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hCO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLDRDQUE0QyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ25FO1FBRUQsT0FBTyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7WUFuREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTlEsb0JBQW9CO1lBQ3BCLGNBQWM7WUFDZCxZQUFZOzs7Ozs7OztJQU1uQiwrQ0FBZ0M7Ozs7O0lBRWhDLG1EQUFpQzs7Ozs7SUFHL0Isc0NBQW9DOzs7OztJQUNwQyxzQ0FBOEI7Ozs7O0lBQzlCLG9DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBlbXB0eSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gJy4vY29tbXVuaWNhdGlvbi1wcm92aWRlcnMvYXBvbGxvLnByb3ZpZGVyJztcbmltcG9ydCB7IFJlc3RQcm92aWRlciB9IGZyb20gJy4vY29tbXVuaWNhdGlvbi1wcm92aWRlcnMvcmVzdC5wcm92aWRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDb21tdW5pY2F0aW9uU2VydmljZSB7XG4gIHByaXZhdGUgZGVmYXVsdFByb3ZpZGVyOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uQ29uZmlnOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWc6IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgYXBvbGxvOiBBcG9sbG9Qcm92aWRlcixcbiAgICBwcml2YXRlIHJlc3Q6IFJlc3RQcm92aWRlcixcbiAgKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuY29tbXVuaWNhdGlvbkNvbmZpZyA9IHRoaXMuY29uZmlnLmdldCgnY29tbXVuaWNhdGlvbicpO1xuICAgICAgdGhpcy5kZWZhdWx0UHJvdmlkZXIgPSB0aGlzLmNvbW11bmljYXRpb25Db25maWcuZGVmYXVsdFByb3ZpZGVyO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhyb3cgRXJyb3IoJ05vIGNvbW11bmljYXRpb25zLmRlZmF1bHRQcm92aWRlciBzZXR0ZWQgaW4gY29uZmlnJyk7XG4gICAgfVxuICB9XG5cbiAgcmVxdWVzdCQocmVxdWVzdElkLCBvcHRpb25zOiBhbnkgPSB7fSwgcHJvdmlkZXI/KSB7XG4gICAgY29uc3QgYWN0aXZlUHJvdmlkZXIgPSBwcm92aWRlciB8fCB0aGlzLmRlZmF1bHRQcm92aWRlcjtcbiAgICBjb25zdCBhY3RpdmVQcm92aWRlckNvbmZpZyA9IHRoaXMuY29tbXVuaWNhdGlvbkNvbmZpZy5wcm92aWRlcnNbYWN0aXZlUHJvdmlkZXJdO1xuXG4gICAgaWYgKCFhY3RpdmVQcm92aWRlckNvbmZpZykge1xuICAgICAgdGhyb3cgRXJyb3IoYFRoZXJlIGlzIG5vIGNvbmZpZyBmb3IgXCIke2FjdGl2ZVByb3ZpZGVyfVwiIHByb3ZpZGVyYCk7XG4gICAgfVxuXG4gICAgLy8gcHJvdmlkZXIudHlwZSBjb250cm9sIGZvciByZXRyb2NvbXBhdGliaWxpdHlcbiAgICBjb25zdCBhY3RpdmVQcm92aWRlclR5cGUgPSBhY3RpdmVQcm92aWRlckNvbmZpZy50eXBlIHx8IGFjdGl2ZVByb3ZpZGVyO1xuXG4gICAgaWYgKCF0aGlzW2FjdGl2ZVByb3ZpZGVyVHlwZV0pIHtcbiAgICAgIHRocm93IEVycm9yKGBUaGVyZSBpcyBubyBcIiR7YWN0aXZlUHJvdmlkZXJUeXBlfVwiIHByb3ZpZGVyIHR5cGVgKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IG9uRXJyb3IgfSA9IG9wdGlvbnM7XG4gICAgcmV0dXJuIHRoaXNbYWN0aXZlUHJvdmlkZXJUeXBlXS5yZXF1ZXN0JChhY3RpdmVQcm92aWRlckNvbmZpZywgcmVxdWVzdElkLCBvcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yLCBvbkVycm9yKSksXG4gICAgICApO1xuICB9XG5cbiAgaGFuZGxlRXJyb3IoZXJyb3IsIG9uRXJyb3IpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGlmIChvbkVycm9yKSB7XG4gICAgICBvbkVycm9yKGVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCdObyBlcnJvciBoYW5kbGVyIGZvciBjb21tdW5pY2F0aW9uIHJlcXVlc3QnLCBlcnJvcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVtcHR5KCk7XG4gIH1cbn1cbiJdfQ==