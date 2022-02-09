import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { empty } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./configuration.service";
import * as i2 from "./communication-providers/apollo.provider";
import * as i3 from "./communication-providers/rest.provider";
export class CommunicationService {
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
}
CommunicationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: CommunicationService, deps: [{ token: i1.ConfigurationService }, { token: i2.ApolloProvider }, { token: i3.RestProvider }], target: i0.ɵɵFactoryTarget.Injectable });
CommunicationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: CommunicationService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: CommunicationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.ConfigurationService }, { type: i2.ApolloProvider }, { type: i3.RestProvider }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbXVuaWNhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQWMsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7OztBQVF6QyxNQUFNLE9BQU8sb0JBQW9CO0lBSy9CLFlBQ1UsTUFBNEIsRUFDNUIsTUFBc0IsRUFDdEIsSUFBa0I7UUFGbEIsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsU0FBSSxHQUFKLElBQUksQ0FBYztRQUUxQixJQUFJO1lBQ0YsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQztTQUNqRTtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osTUFBTSxLQUFLLENBQUMsb0RBQW9ELENBQUMsQ0FBQztTQUNuRTtJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsU0FBUyxFQUFFLFVBQWUsRUFBRSxFQUFFLFFBQVM7UUFDOUMsTUFBTSxjQUFjLEdBQUcsUUFBUSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDeEQsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRWhGLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUN6QixNQUFNLEtBQUssQ0FBQywyQkFBMkIsY0FBYyxZQUFZLENBQUMsQ0FBQztTQUNwRTtRQUVELCtDQUErQztRQUMvQyxNQUFNLGtCQUFrQixHQUFHLG9CQUFvQixDQUFDLElBQUksSUFBSSxjQUFjLENBQUM7UUFFdkUsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO1lBQzdCLE1BQU0sS0FBSyxDQUFDLGdCQUFnQixrQkFBa0IsaUJBQWlCLENBQUMsQ0FBQztTQUNsRTtRQUVELE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDNUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQzthQUMvRSxJQUFJLENBQ0gsVUFBVSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUN4RCxDQUFDO0lBQ04sQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTztRQUN4QixJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQjthQUFNO1lBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyw0Q0FBNEMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNuRTtRQUVELE9BQU8sS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7aUhBaERVLG9CQUFvQjtxSEFBcEIsb0JBQW9CLGNBRm5CLE1BQU07MkZBRVAsb0JBQW9CO2tCQUhoQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZW1wdHkgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnLi9jb21tdW5pY2F0aW9uLXByb3ZpZGVycy9hcG9sbG8ucHJvdmlkZXInO1xyXG5pbXBvcnQgeyBSZXN0UHJvdmlkZXIgfSBmcm9tICcuL2NvbW11bmljYXRpb24tcHJvdmlkZXJzL3Jlc3QucHJvdmlkZXInO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbW11bmljYXRpb25TZXJ2aWNlIHtcclxuICBwcml2YXRlIGRlZmF1bHRQcm92aWRlcjogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIGNvbW11bmljYXRpb25Db25maWc6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNvbmZpZzogQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGFwb2xsbzogQXBvbGxvUHJvdmlkZXIsXHJcbiAgICBwcml2YXRlIHJlc3Q6IFJlc3RQcm92aWRlcixcclxuICApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMuY29tbXVuaWNhdGlvbkNvbmZpZyA9IHRoaXMuY29uZmlnLmdldCgnY29tbXVuaWNhdGlvbicpO1xyXG4gICAgICB0aGlzLmRlZmF1bHRQcm92aWRlciA9IHRoaXMuY29tbXVuaWNhdGlvbkNvbmZpZy5kZWZhdWx0UHJvdmlkZXI7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJ05vIGNvbW11bmljYXRpb25zLmRlZmF1bHRQcm92aWRlciBzZXR0ZWQgaW4gY29uZmlnJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0JChyZXF1ZXN0SWQsIG9wdGlvbnM6IGFueSA9IHt9LCBwcm92aWRlcj8pIHtcclxuICAgIGNvbnN0IGFjdGl2ZVByb3ZpZGVyID0gcHJvdmlkZXIgfHwgdGhpcy5kZWZhdWx0UHJvdmlkZXI7XHJcbiAgICBjb25zdCBhY3RpdmVQcm92aWRlckNvbmZpZyA9IHRoaXMuY29tbXVuaWNhdGlvbkNvbmZpZy5wcm92aWRlcnNbYWN0aXZlUHJvdmlkZXJdO1xyXG5cclxuICAgIGlmICghYWN0aXZlUHJvdmlkZXJDb25maWcpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYFRoZXJlIGlzIG5vIGNvbmZpZyBmb3IgXCIke2FjdGl2ZVByb3ZpZGVyfVwiIHByb3ZpZGVyYCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJvdmlkZXIudHlwZSBjb250cm9sIGZvciByZXRyb2NvbXBhdGliaWxpdHlcclxuICAgIGNvbnN0IGFjdGl2ZVByb3ZpZGVyVHlwZSA9IGFjdGl2ZVByb3ZpZGVyQ29uZmlnLnR5cGUgfHwgYWN0aXZlUHJvdmlkZXI7XHJcblxyXG4gICAgaWYgKCF0aGlzW2FjdGl2ZVByb3ZpZGVyVHlwZV0pIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYFRoZXJlIGlzIG5vIFwiJHthY3RpdmVQcm92aWRlclR5cGV9XCIgcHJvdmlkZXIgdHlwZWApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgb25FcnJvciB9ID0gb3B0aW9ucztcclxuICAgIHJldHVybiB0aGlzW2FjdGl2ZVByb3ZpZGVyVHlwZV0ucmVxdWVzdCQoYWN0aXZlUHJvdmlkZXJDb25maWcsIHJlcXVlc3RJZCwgb3B0aW9ucylcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsIG9uRXJyb3IpKSxcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUVycm9yKGVycm9yLCBvbkVycm9yKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGlmIChvbkVycm9yKSB7XHJcbiAgICAgIG9uRXJyb3IoZXJyb3IpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS53YXJuKCdObyBlcnJvciBoYW5kbGVyIGZvciBjb21tdW5pY2F0aW9uIHJlcXVlc3QnLCBlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVtcHR5KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==