import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, } from '@angular/router';
import { MrMenuService } from '../services/menu.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/menu.service";
import * as i2 from "@angular/router";
var DynamicPathGuard = /** @class */ (function () {
    function DynamicPathGuard(menuService, router) {
        this.menuService = menuService;
        this.router = router;
    }
    DynamicPathGuard.prototype.canActivate = function (next, state) {
        var url = state.url;
        if (!this.menuService.isDynamicPath(url)) {
            var notFoundPath = next.data.notFoundPath;
            this.router.navigate([notFoundPath ? "/" + notFoundPath : '/']);
            return false;
        }
        return true;
    };
    DynamicPathGuard.ctorParameters = function () { return [
        { type: MrMenuService },
        { type: Router }
    ]; };
    DynamicPathGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function DynamicPathGuard_Factory() { return new DynamicPathGuard(i0.ɵɵinject(i1.MrMenuService), i0.ɵɵinject(i2.Router)); }, token: DynamicPathGuard, providedIn: "root" });
    DynamicPathGuard = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [MrMenuService,
            Router])
    ], DynamicPathGuard);
    return DynamicPathGuard;
}());
export { DynamicPathGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1wYXRoLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9ndWFyZHMvZHluYW1pYy1wYXRoLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxXQUFXLEVBQ1gsc0JBQXNCLEVBQ3RCLG1CQUFtQixFQUNuQixNQUFNLEdBQ1AsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFLekQ7SUFDRSwwQkFDVSxXQUEwQixFQUMxQixNQUFjO1FBRGQsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNyQixDQUFDO0lBRUosc0NBQVcsR0FBWCxVQUNFLElBQTRCLEVBQzVCLEtBQTBCO1FBRWxCLElBQUEsZUFBRyxDQUFXO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNoQyxJQUFBLHFDQUFZLENBQWU7WUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQUksWUFBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7O2dCQWZzQixhQUFhO2dCQUNsQixNQUFNOzs7SUFIYixnQkFBZ0I7UUFINUIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FHdUIsYUFBYTtZQUNsQixNQUFNO09BSGIsZ0JBQWdCLENBa0I1QjsyQkEvQkQ7Q0ErQkMsQUFsQkQsSUFrQkM7U0FsQlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2FuQWN0aXZhdGUsXG4gIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gIFJvdXRlclN0YXRlU25hcHNob3QsXG4gIFJvdXRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1yTWVudVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9tZW51LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY1BhdGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtZW51U2VydmljZTogTXJNZW51U2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICkge31cblxuICBjYW5BY3RpdmF0ZShcbiAgICBuZXh0OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj4gfCBQcm9taXNlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XG4gICAgY29uc3QgeyB1cmwgfSA9IHN0YXRlO1xuICAgIGlmICghdGhpcy5tZW51U2VydmljZS5pc0R5bmFtaWNQYXRoKHVybCkpIHtcbiAgICAgIGNvbnN0IHsgbm90Rm91bmRQYXRoIH0gPSBuZXh0LmRhdGE7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbbm90Rm91bmRQYXRoID8gYC8ke25vdEZvdW5kUGF0aH1gIDogJy8nXSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXX0=