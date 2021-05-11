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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1wYXRoLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9ndWFyZHMvZHluYW1pYy1wYXRoLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxXQUFXLEVBQ1gsc0JBQXNCLEVBQ3RCLG1CQUFtQixFQUNuQixNQUFNLEdBQ1AsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFLekQ7SUFDRSwwQkFDVSxXQUEwQixFQUMxQixNQUFjO1FBRGQsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNyQixDQUFDO0lBRUosc0NBQVcsR0FBWCxVQUNFLElBQTRCLEVBQzVCLEtBQTBCO1FBRWxCLElBQUEsZUFBRyxDQUFXO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNoQyxJQUFBLHFDQUFZLENBQWU7WUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQUksWUFBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7O2dCQWZzQixhQUFhO2dCQUNsQixNQUFNOzs7SUFIYixnQkFBZ0I7UUFINUIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FHdUIsYUFBYTtZQUNsQixNQUFNO09BSGIsZ0JBQWdCLENBa0I1QjsyQkEvQkQ7Q0ErQkMsQUFsQkQsSUFrQkM7U0FsQlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENhbkFjdGl2YXRlLFxyXG4gIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXHJcbiAgUm91dGVyU3RhdGVTbmFwc2hvdCxcclxuICBSb3V0ZXIsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBNck1lbnVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbWVudS5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljUGF0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBtZW51U2VydmljZTogTXJNZW51U2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcclxuICApIHt9XHJcblxyXG4gIGNhbkFjdGl2YXRlKFxyXG4gICAgbmV4dDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XHJcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB8IFByb21pc2U8Ym9vbGVhbj4gfCBib29sZWFuIHtcclxuICAgIGNvbnN0IHsgdXJsIH0gPSBzdGF0ZTtcclxuICAgIGlmICghdGhpcy5tZW51U2VydmljZS5pc0R5bmFtaWNQYXRoKHVybCkpIHtcclxuICAgICAgY29uc3QgeyBub3RGb3VuZFBhdGggfSA9IG5leHQuZGF0YTtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW25vdEZvdW5kUGF0aCA/IGAvJHtub3RGb3VuZFBhdGh9YCA6ICcvJ10pO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuIl19