import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ConfigurationService } from './configuration.service';
import * as i0 from "@angular/core";
import * as i1 from "./configuration.service";
let LocalConfigService = class LocalConfigService {
    constructor(config) {
        this.config = config;
    }
    load(config) {
        return of(true).pipe(tap(() => {
            if (config) {
                Object.keys(config).forEach((key) => this.config.set(key, config[key]));
            }
        })).toPromise();
    }
};
LocalConfigService.ctorParameters = () => [
    { type: ConfigurationService }
];
LocalConfigService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LocalConfigService_Factory() { return new LocalConfigService(i0.ɵɵinject(i1.ConfigurationService)); }, token: LocalConfigService, providedIn: "root" });
LocalConfigService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], LocalConfigService);
export { LocalConfigService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL3NlcnZpY2VzL2xvY2FsLWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7QUFLL0QsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFDN0IsWUFDVSxNQUE0QjtRQUE1QixXQUFNLEdBQU4sTUFBTSxDQUFzQjtJQUNuQyxDQUFDO0lBRUosSUFBSSxDQUFDLE1BQU07UUFDVCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ2xCLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDUCxJQUFJLE1BQU0sRUFBRTtnQkFDVixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDekU7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hCLENBQUM7Q0FDRixDQUFBOztZQVptQixvQkFBb0I7OztBQUYzQixrQkFBa0I7SUFIOUIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztxQ0FHa0Isb0JBQW9CO0dBRjNCLGtCQUFrQixDQWM5QjtTQWRZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4vY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIExvY2FsQ29uZmlnU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBDb25maWd1cmF0aW9uU2VydmljZSxcbiAgKSB7fVxuXG4gIGxvYWQoY29uZmlnKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gb2YodHJ1ZSkucGlwZShcbiAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgIGlmIChjb25maWcpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhjb25maWcpLmZvckVhY2goKGtleSkgPT4gdGhpcy5jb25maWcuc2V0KGtleSwgY29uZmlnW2tleV0pKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgKS50b1Byb21pc2UoKTtcbiAgfVxufVxuIl19