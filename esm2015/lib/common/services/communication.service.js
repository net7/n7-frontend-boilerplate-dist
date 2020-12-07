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
let CommunicationService = class CommunicationService {
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
    request$(requestId, options = {}, provider) {
        const activeProvider = provider || this.defaultProvider;
        const activeProviderConfig = this.communicationConfig.providers[activeProvider];
        if (!activeProviderConfig) {
            throw Error(`There is no config for "${activeProvider}" provider`);
        }
        // provider.type control for retrocompatibility
        const activeProviderType = activeProviderConfig.type || activeProvider;
        if (!this[activeProviderType]) {
            throw Error(`There is no "${activeProviderType}" provider type`);
        }
        const { onError } = options;
        return this[activeProviderType].request$(activeProviderConfig, requestId, options)
            .pipe(catchError((error) => this.handleError(error, onError)));
    }
    handleError(error, onError) {
        if (onError) {
            onError(error);
        }
        else {
            console.warn('No error handler for communication request', error);
        }
        return empty();
    }
};
CommunicationService.ctorParameters = () => [
    { type: ConfigurationService },
    { type: ApolloProvider },
    { type: RestProvider }
];
CommunicationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CommunicationService_Factory() { return new CommunicationService(i0.ɵɵinject(i1.ConfigurationService), i0.ɵɵinject(i2.ApolloProvider), i0.ɵɵinject(i3.RestProvider)); }, token: CommunicationService, providedIn: "root" });
CommunicationService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [ConfigurationService,
        ApolloProvider,
        RestProvider])
], CommunicationService);
export { CommunicationService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbXVuaWNhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBYyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7Ozs7QUFLdkUsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFLL0IsWUFDVSxNQUE0QixFQUM1QixNQUFzQixFQUN0QixJQUFrQjtRQUZsQixXQUFNLEdBQU4sTUFBTSxDQUFzQjtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QixTQUFJLEdBQUosSUFBSSxDQUFjO1FBRTFCLElBQUk7WUFDRixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDO1NBQ2pFO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixNQUFNLEtBQUssQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO1NBQ25FO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxTQUFTLEVBQUUsVUFBZSxFQUFFLEVBQUUsUUFBUztRQUM5QyxNQUFNLGNBQWMsR0FBRyxRQUFRLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUN4RCxNQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFaEYsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQ3pCLE1BQU0sS0FBSyxDQUFDLDJCQUEyQixjQUFjLFlBQVksQ0FBQyxDQUFDO1NBQ3BFO1FBRUQsK0NBQStDO1FBQy9DLE1BQU0sa0JBQWtCLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxJQUFJLGNBQWMsQ0FBQztRQUV2RSxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUU7WUFDN0IsTUFBTSxLQUFLLENBQUMsZ0JBQWdCLGtCQUFrQixpQkFBaUIsQ0FBQyxDQUFDO1NBQ2xFO1FBRUQsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUM1QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDO2FBQy9FLElBQUksQ0FDSCxVQUFVLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQ3hELENBQUM7SUFDTixDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQUssRUFBRSxPQUFPO1FBQ3hCLElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hCO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLDRDQUE0QyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ25FO1FBRUQsT0FBTyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0NBQ0YsQ0FBQTs7WUEzQ21CLG9CQUFvQjtZQUNwQixjQUFjO1lBQ2hCLFlBQVk7OztBQVJqQixvQkFBb0I7SUFIaEMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztxQ0FPa0Isb0JBQW9CO1FBQ3BCLGNBQWM7UUFDaEIsWUFBWTtHQVJqQixvQkFBb0IsQ0FpRGhDO1NBakRZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZW1wdHkgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnLi9jb21tdW5pY2F0aW9uLXByb3ZpZGVycy9hcG9sbG8ucHJvdmlkZXInO1xyXG5pbXBvcnQgeyBSZXN0UHJvdmlkZXIgfSBmcm9tICcuL2NvbW11bmljYXRpb24tcHJvdmlkZXJzL3Jlc3QucHJvdmlkZXInO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbW11bmljYXRpb25TZXJ2aWNlIHtcclxuICBwcml2YXRlIGRlZmF1bHRQcm92aWRlcjogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIGNvbW11bmljYXRpb25Db25maWc6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNvbmZpZzogQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGFwb2xsbzogQXBvbGxvUHJvdmlkZXIsXHJcbiAgICBwcml2YXRlIHJlc3Q6IFJlc3RQcm92aWRlcixcclxuICApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMuY29tbXVuaWNhdGlvbkNvbmZpZyA9IHRoaXMuY29uZmlnLmdldCgnY29tbXVuaWNhdGlvbicpO1xyXG4gICAgICB0aGlzLmRlZmF1bHRQcm92aWRlciA9IHRoaXMuY29tbXVuaWNhdGlvbkNvbmZpZy5kZWZhdWx0UHJvdmlkZXI7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJ05vIGNvbW11bmljYXRpb25zLmRlZmF1bHRQcm92aWRlciBzZXR0ZWQgaW4gY29uZmlnJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0JChyZXF1ZXN0SWQsIG9wdGlvbnM6IGFueSA9IHt9LCBwcm92aWRlcj8pIHtcclxuICAgIGNvbnN0IGFjdGl2ZVByb3ZpZGVyID0gcHJvdmlkZXIgfHwgdGhpcy5kZWZhdWx0UHJvdmlkZXI7XHJcbiAgICBjb25zdCBhY3RpdmVQcm92aWRlckNvbmZpZyA9IHRoaXMuY29tbXVuaWNhdGlvbkNvbmZpZy5wcm92aWRlcnNbYWN0aXZlUHJvdmlkZXJdO1xyXG5cclxuICAgIGlmICghYWN0aXZlUHJvdmlkZXJDb25maWcpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYFRoZXJlIGlzIG5vIGNvbmZpZyBmb3IgXCIke2FjdGl2ZVByb3ZpZGVyfVwiIHByb3ZpZGVyYCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJvdmlkZXIudHlwZSBjb250cm9sIGZvciByZXRyb2NvbXBhdGliaWxpdHlcclxuICAgIGNvbnN0IGFjdGl2ZVByb3ZpZGVyVHlwZSA9IGFjdGl2ZVByb3ZpZGVyQ29uZmlnLnR5cGUgfHwgYWN0aXZlUHJvdmlkZXI7XHJcblxyXG4gICAgaWYgKCF0aGlzW2FjdGl2ZVByb3ZpZGVyVHlwZV0pIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYFRoZXJlIGlzIG5vIFwiJHthY3RpdmVQcm92aWRlclR5cGV9XCIgcHJvdmlkZXIgdHlwZWApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgb25FcnJvciB9ID0gb3B0aW9ucztcclxuICAgIHJldHVybiB0aGlzW2FjdGl2ZVByb3ZpZGVyVHlwZV0ucmVxdWVzdCQoYWN0aXZlUHJvdmlkZXJDb25maWcsIHJlcXVlc3RJZCwgb3B0aW9ucylcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsIG9uRXJyb3IpKSxcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUVycm9yKGVycm9yLCBvbkVycm9yKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGlmIChvbkVycm9yKSB7XHJcbiAgICAgIG9uRXJyb3IoZXJyb3IpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS53YXJuKCdObyBlcnJvciBoYW5kbGVyIGZvciBjb21tdW5pY2F0aW9uIHJlcXVlc3QnLCBlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVtcHR5KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==