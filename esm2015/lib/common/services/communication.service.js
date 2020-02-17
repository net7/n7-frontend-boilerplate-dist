/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/services/communication.service.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbXVuaWNhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNsRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBYyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7O0FBS3pDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7OztJQUkvQixZQUNVLE1BQTRCLEVBQzVCLE1BQXNCLEVBQ3RCLElBQWtCO1FBRmxCLFdBQU0sR0FBTixNQUFNLENBQXNCO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLFNBQUksR0FBSixJQUFJLENBQWM7UUFFMUIsSUFBSTtZQUNGLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUM7U0FDakU7UUFBQyxPQUFNLEdBQUcsRUFBRTtZQUNYLE1BQU0sS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7U0FDbkU7SUFDSCxDQUFDOzs7Ozs7O0lBRUQsUUFBUSxDQUFDLFNBQVMsRUFBRSxVQUFlLEVBQUUsRUFBRSxRQUFTO1FBQzlDLFFBQVEsR0FBRyxRQUFRLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUM1QyxJQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUFFLE1BQU0sS0FBSyxDQUFDLGVBQWUsUUFBUSxXQUFXLENBQUMsQ0FBQztjQUU5RCxFQUFFLE9BQU8sRUFBRSxHQUFHLE9BQU87UUFDM0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUM7YUFDL0MsSUFBSSxDQUNILFVBQVU7Ozs7UUFBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQUMsQ0FDeEQsQ0FBQztJQUNOLENBQUM7Ozs7OztJQUVELFdBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTztRQUN4QixJQUFHLE9BQU8sRUFBQztZQUNULE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQjthQUFNO1lBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyw0Q0FBNEMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNuRTtRQUVELE9BQU8sS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7O1lBdkNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVJRLG9CQUFvQjtZQUNwQixjQUFjO1lBQ2QsWUFBWTs7Ozs7Ozs7SUFRbkIsK0NBQWdDOzs7OztJQUNoQyxtREFBaUM7Ozs7O0lBRy9CLHNDQUFvQzs7Ozs7SUFDcEMsc0NBQThCOzs7OztJQUM5QixvQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4vY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnLi9jb21tdW5pY2F0aW9uLXByb3ZpZGVycy9hcG9sbG8vYXBvbGxvLnByb3ZpZGVyJztcbmltcG9ydCB7IFJlc3RQcm92aWRlciB9IGZyb20gJy4vY29tbXVuaWNhdGlvbi1wcm92aWRlcnMvcmVzdC9yZXN0LnByb3ZpZGVyJztcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBlbXB0eSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb21tdW5pY2F0aW9uU2VydmljZSB7XG4gIHByaXZhdGUgZGVmYXVsdFByb3ZpZGVyOiBzdHJpbmc7XG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbkNvbmZpZzogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGFwb2xsbzogQXBvbGxvUHJvdmlkZXIsXG4gICAgcHJpdmF0ZSByZXN0OiBSZXN0UHJvdmlkZXIsXG4gICl7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuY29tbXVuaWNhdGlvbkNvbmZpZyA9IHRoaXMuY29uZmlnLmdldCgnY29tbXVuaWNhdGlvbicpO1xuICAgICAgdGhpcy5kZWZhdWx0UHJvdmlkZXIgPSB0aGlzLmNvbW11bmljYXRpb25Db25maWcuZGVmYXVsdFByb3ZpZGVyO1xuICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICB0aHJvdyBFcnJvcignTm8gY29tbXVuaWNhdGlvbnMuZGVmYXVsdFByb3ZpZGVyIHNldHRlZCBpbiBjb25maWcnKTtcbiAgICB9XG4gIH1cblxuICByZXF1ZXN0JChyZXF1ZXN0SWQsIG9wdGlvbnM6IGFueSA9IHt9LCBwcm92aWRlcj8pe1xuICAgIHByb3ZpZGVyID0gcHJvdmlkZXIgfHwgdGhpcy5kZWZhdWx0UHJvdmlkZXI7XG4gICAgaWYoIXRoaXNbcHJvdmlkZXJdKSB0aHJvdyBFcnJvcihgVGhlcmUgaXMgbm8gJHtwcm92aWRlcn0gcHJvdmlkZXJgKTtcblxuICAgIGNvbnN0IHsgb25FcnJvciB9ID0gb3B0aW9ucztcbiAgICByZXR1cm4gdGhpc1twcm92aWRlcl0ucmVxdWVzdCQocmVxdWVzdElkLCBvcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yLCBvbkVycm9yKSlcbiAgICAgICk7XG4gIH1cblxuICBoYW5kbGVFcnJvcihlcnJvciwgb25FcnJvcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgaWYob25FcnJvcil7XG4gICAgICBvbkVycm9yKGVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCdObyBlcnJvciBoYW5kbGVyIGZvciBjb21tdW5pY2F0aW9uIHJlcXVlc3QnLCBlcnJvcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVtcHR5KCk7XG4gIH1cbn0iXX0=