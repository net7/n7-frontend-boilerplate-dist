import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, } from '@angular/router';
import { MrMenuService } from '../services/menu.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/menu.service";
import * as i2 from "@angular/router";
let DynamicPathGuard = class DynamicPathGuard {
    constructor(menuService, router) {
        this.menuService = menuService;
        this.router = router;
    }
    canActivate(next, state) {
        const { url } = state;
        if (!this.menuService.isDynamicPath(url)) {
            const { notFoundPath } = next.data;
            this.router.navigate([notFoundPath ? `/${notFoundPath}` : '/']);
            return false;
        }
        return true;
    }
};
DynamicPathGuard.ctorParameters = () => [
    { type: MrMenuService },
    { type: Router }
];
DynamicPathGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function DynamicPathGuard_Factory() { return new DynamicPathGuard(i0.ɵɵinject(i1.MrMenuService), i0.ɵɵinject(i2.Router)); }, token: DynamicPathGuard, providedIn: "root" });
DynamicPathGuard = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [MrMenuService,
        Router])
], DynamicPathGuard);
export { DynamicPathGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1wYXRoLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9ndWFyZHMvZHluYW1pYy1wYXRoLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxXQUFXLEVBQ1gsc0JBQXNCLEVBQ3RCLG1CQUFtQixFQUNuQixNQUFNLEdBQ1AsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFLekQsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFDM0IsWUFDVSxXQUEwQixFQUMxQixNQUFjO1FBRGQsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNyQixDQUFDO0lBRUosV0FBVyxDQUNULElBQTRCLEVBQzVCLEtBQTBCO1FBRTFCLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3hDLE1BQU0sRUFBRSxZQUFZLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FDRixDQUFBOztZQWhCd0IsYUFBYTtZQUNsQixNQUFNOzs7QUFIYixnQkFBZ0I7SUFINUIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztxQ0FHdUIsYUFBYTtRQUNsQixNQUFNO0dBSGIsZ0JBQWdCLENBa0I1QjtTQWxCWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDYW5BY3RpdmF0ZSxcbiAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgUm91dGVyU3RhdGVTbmFwc2hvdCxcbiAgUm91dGVyLFxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTXJNZW51U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL21lbnUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljUGF0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1lbnVTZXJ2aWNlOiBNck1lbnVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgKSB7fVxuXG4gIGNhbkFjdGl2YXRlKFxuICAgIG5leHQ6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB8IFByb21pc2U8Ym9vbGVhbj4gfCBib29sZWFuIHtcbiAgICBjb25zdCB7IHVybCB9ID0gc3RhdGU7XG4gICAgaWYgKCF0aGlzLm1lbnVTZXJ2aWNlLmlzRHluYW1pY1BhdGgodXJsKSkge1xuICAgICAgY29uc3QgeyBub3RGb3VuZFBhdGggfSA9IG5leHQuZGF0YTtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtub3RGb3VuZFBhdGggPyBgLyR7bm90Rm91bmRQYXRofWAgOiAnLyddKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiJdfQ==