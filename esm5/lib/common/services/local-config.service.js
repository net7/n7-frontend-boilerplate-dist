import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ConfigurationService } from './configuration.service';
import * as i0 from "@angular/core";
import * as i1 from "./configuration.service";
var LocalConfigService = /** @class */ (function () {
    function LocalConfigService(config) {
        this.config = config;
    }
    LocalConfigService.prototype.load = function (config) {
        var _this = this;
        return of(true).pipe(tap(function () {
            if (config) {
                Object.keys(config).forEach(function (key) { return _this.config.set(key, config[key]); });
            }
        })).toPromise();
    };
    LocalConfigService.ctorParameters = function () { return [
        { type: ConfigurationService }
    ]; };
    LocalConfigService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LocalConfigService_Factory() { return new LocalConfigService(i0.ɵɵinject(i1.ConfigurationService)); }, token: LocalConfigService, providedIn: "root" });
    LocalConfigService = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [ConfigurationService])
    ], LocalConfigService);
    return LocalConfigService;
}());
export { LocalConfigService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL3NlcnZpY2VzL2xvY2FsLWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7QUFLL0Q7SUFDRSw0QkFDVSxNQUE0QjtRQUE1QixXQUFNLEdBQU4sTUFBTSxDQUFzQjtJQUNuQyxDQUFDO0lBRUosaUNBQUksR0FBSixVQUFLLE1BQU07UUFBWCxpQkFRQztRQVBDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDbEIsR0FBRyxDQUFDO1lBQ0YsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQWpDLENBQWlDLENBQUMsQ0FBQzthQUN6RTtRQUNILENBQUMsQ0FBQyxDQUNILENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7Z0JBWGlCLG9CQUFvQjs7O0lBRjNCLGtCQUFrQjtRQUg5QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQUdrQixvQkFBb0I7T0FGM0Isa0JBQWtCLENBYzlCOzZCQXRCRDtDQXNCQyxBQWRELElBY0M7U0FkWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBMb2NhbENvbmZpZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZzogQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICkge31cblxuICBsb2FkKGNvbmZpZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG9mKHRydWUpLnBpcGUoXG4gICAgICB0YXAoKCkgPT4ge1xuICAgICAgICBpZiAoY29uZmlnKSB7XG4gICAgICAgICAgT2JqZWN0LmtleXMoY29uZmlnKS5mb3JFYWNoKChrZXkpID0+IHRoaXMuY29uZmlnLnNldChrZXksIGNvbmZpZ1trZXldKSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICkudG9Qcm9taXNlKCk7XG4gIH1cbn1cbiJdfQ==