import { __decorate, __metadata } from "tslib";
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
    CommunicationService.prototype.request$ = function (requestId, options, provider) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var activeProvider = provider || this.defaultProvider;
        var activeProviderConfig = this.communicationConfig.providers[activeProvider];
        if (!activeProviderConfig) {
            throw Error("There is no config for \"" + activeProvider + "\" provider");
        }
        // provider.type control for retrocompatibility
        var activeProviderType = activeProviderConfig.type || activeProvider;
        if (!this[activeProviderType]) {
            throw Error("There is no \"" + activeProviderType + "\" provider type");
        }
        var onError = options.onError;
        return this[activeProviderType].request$(activeProviderConfig, requestId, options)
            .pipe(catchError(function (error) { return _this.handleError(error, onError); }));
    };
    CommunicationService.prototype.handleError = function (error, onError) {
        if (onError) {
            onError(error);
        }
        else {
            console.warn('No error handler for communication request', error);
        }
        return empty();
    };
    CommunicationService.ctorParameters = function () { return [
        { type: ConfigurationService },
        { type: ApolloProvider },
        { type: RestProvider }
    ]; };
    CommunicationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CommunicationService_Factory() { return new CommunicationService(i0.ɵɵinject(i1.ConfigurationService), i0.ɵɵinject(i2.ApolloProvider), i0.ɵɵinject(i3.RestProvider)); }, token: CommunicationService, providedIn: "root" });
    CommunicationService = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [ConfigurationService,
            ApolloProvider,
            RestProvider])
    ], CommunicationService);
    return CommunicationService;
}());
export { CommunicationService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbXVuaWNhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBYyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7Ozs7QUFLdkU7SUFLRSw4QkFDVSxNQUE0QixFQUM1QixNQUFzQixFQUN0QixJQUFrQjtRQUZsQixXQUFNLEdBQU4sTUFBTSxDQUFzQjtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QixTQUFJLEdBQUosSUFBSSxDQUFjO1FBRTFCLElBQUk7WUFDRixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDO1NBQ2pFO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixNQUFNLEtBQUssQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO1NBQ25FO0lBQ0gsQ0FBQztJQUVELHVDQUFRLEdBQVIsVUFBUyxTQUFTLEVBQUUsT0FBaUIsRUFBRSxRQUFTO1FBQWhELGlCQW9CQztRQXBCbUIsd0JBQUEsRUFBQSxZQUFpQjtRQUNuQyxJQUFNLGNBQWMsR0FBRyxRQUFRLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUN4RCxJQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFaEYsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQ3pCLE1BQU0sS0FBSyxDQUFDLDhCQUEyQixjQUFjLGdCQUFZLENBQUMsQ0FBQztTQUNwRTtRQUVELCtDQUErQztRQUMvQyxJQUFNLGtCQUFrQixHQUFHLG9CQUFvQixDQUFDLElBQUksSUFBSSxjQUFjLENBQUM7UUFFdkUsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO1lBQzdCLE1BQU0sS0FBSyxDQUFDLG1CQUFnQixrQkFBa0IscUJBQWlCLENBQUMsQ0FBQztTQUNsRTtRQUVPLElBQUEseUJBQU8sQ0FBYTtRQUM1QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDO2FBQy9FLElBQUksQ0FDSCxVQUFVLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQyxDQUN4RCxDQUFDO0lBQ04sQ0FBQztJQUVELDBDQUFXLEdBQVgsVUFBWSxLQUFLLEVBQUUsT0FBTztRQUN4QixJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQjthQUFNO1lBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyw0Q0FBNEMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNuRTtRQUVELE9BQU8sS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7Z0JBMUNpQixvQkFBb0I7Z0JBQ3BCLGNBQWM7Z0JBQ2hCLFlBQVk7OztJQVJqQixvQkFBb0I7UUFIaEMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FPa0Isb0JBQW9CO1lBQ3BCLGNBQWM7WUFDaEIsWUFBWTtPQVJqQixvQkFBb0IsQ0FpRGhDOytCQTNERDtDQTJEQyxBQWpERCxJQWlEQztTQWpEWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZW1wdHkgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICcuL2NvbW11bmljYXRpb24tcHJvdmlkZXJzL2Fwb2xsby5wcm92aWRlcic7XG5pbXBvcnQgeyBSZXN0UHJvdmlkZXIgfSBmcm9tICcuL2NvbW11bmljYXRpb24tcHJvdmlkZXJzL3Jlc3QucHJvdmlkZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ29tbXVuaWNhdGlvblNlcnZpY2Uge1xuICBwcml2YXRlIGRlZmF1bHRQcm92aWRlcjogc3RyaW5nO1xuXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbkNvbmZpZzogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGFwb2xsbzogQXBvbGxvUHJvdmlkZXIsXG4gICAgcHJpdmF0ZSByZXN0OiBSZXN0UHJvdmlkZXIsXG4gICkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmNvbW11bmljYXRpb25Db25maWcgPSB0aGlzLmNvbmZpZy5nZXQoJ2NvbW11bmljYXRpb24nKTtcbiAgICAgIHRoaXMuZGVmYXVsdFByb3ZpZGVyID0gdGhpcy5jb21tdW5pY2F0aW9uQ29uZmlnLmRlZmF1bHRQcm92aWRlcjtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRocm93IEVycm9yKCdObyBjb21tdW5pY2F0aW9ucy5kZWZhdWx0UHJvdmlkZXIgc2V0dGVkIGluIGNvbmZpZycpO1xuICAgIH1cbiAgfVxuXG4gIHJlcXVlc3QkKHJlcXVlc3RJZCwgb3B0aW9uczogYW55ID0ge30sIHByb3ZpZGVyPykge1xuICAgIGNvbnN0IGFjdGl2ZVByb3ZpZGVyID0gcHJvdmlkZXIgfHwgdGhpcy5kZWZhdWx0UHJvdmlkZXI7XG4gICAgY29uc3QgYWN0aXZlUHJvdmlkZXJDb25maWcgPSB0aGlzLmNvbW11bmljYXRpb25Db25maWcucHJvdmlkZXJzW2FjdGl2ZVByb3ZpZGVyXTtcblxuICAgIGlmICghYWN0aXZlUHJvdmlkZXJDb25maWcpIHtcbiAgICAgIHRocm93IEVycm9yKGBUaGVyZSBpcyBubyBjb25maWcgZm9yIFwiJHthY3RpdmVQcm92aWRlcn1cIiBwcm92aWRlcmApO1xuICAgIH1cblxuICAgIC8vIHByb3ZpZGVyLnR5cGUgY29udHJvbCBmb3IgcmV0cm9jb21wYXRpYmlsaXR5XG4gICAgY29uc3QgYWN0aXZlUHJvdmlkZXJUeXBlID0gYWN0aXZlUHJvdmlkZXJDb25maWcudHlwZSB8fCBhY3RpdmVQcm92aWRlcjtcblxuICAgIGlmICghdGhpc1thY3RpdmVQcm92aWRlclR5cGVdKSB7XG4gICAgICB0aHJvdyBFcnJvcihgVGhlcmUgaXMgbm8gXCIke2FjdGl2ZVByb3ZpZGVyVHlwZX1cIiBwcm92aWRlciB0eXBlYCk7XG4gICAgfVxuXG4gICAgY29uc3QgeyBvbkVycm9yIH0gPSBvcHRpb25zO1xuICAgIHJldHVybiB0aGlzW2FjdGl2ZVByb3ZpZGVyVHlwZV0ucmVxdWVzdCQoYWN0aXZlUHJvdmlkZXJDb25maWcsIHJlcXVlc3RJZCwgb3B0aW9ucylcbiAgICAgIC5waXBlKFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvciwgb25FcnJvcikpLFxuICAgICAgKTtcbiAgfVxuXG4gIGhhbmRsZUVycm9yKGVycm9yLCBvbkVycm9yKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBpZiAob25FcnJvcikge1xuICAgICAgb25FcnJvcihlcnJvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignTm8gZXJyb3IgaGFuZGxlciBmb3IgY29tbXVuaWNhdGlvbiByZXF1ZXN0JywgZXJyb3IpO1xuICAgIH1cblxuICAgIHJldHVybiBlbXB0eSgpO1xuICB9XG59XG4iXX0=