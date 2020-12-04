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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1wYXRoLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9ndWFyZHMvZHluYW1pYy1wYXRoLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxXQUFXLEVBQ1gsc0JBQXNCLEVBQ3RCLG1CQUFtQixFQUNuQixNQUFNLEdBQ1AsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFLekQsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFDM0IsWUFDVSxXQUEwQixFQUMxQixNQUFjO1FBRGQsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNyQixDQUFDO0lBRUosV0FBVyxDQUNULElBQTRCLEVBQzVCLEtBQTBCO1FBRTFCLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3hDLE1BQU0sRUFBRSxZQUFZLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FDRixDQUFBOztZQWhCd0IsYUFBYTtZQUNsQixNQUFNOzs7QUFIYixnQkFBZ0I7SUFINUIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztxQ0FHdUIsYUFBYTtRQUNsQixNQUFNO0dBSGIsZ0JBQWdCLENBa0I1QjtTQWxCWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQ2FuQWN0aXZhdGUsXHJcbiAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuICBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxyXG4gIFJvdXRlcixcclxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE1yTWVudVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9tZW51LnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNQYXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG1lbnVTZXJ2aWNlOiBNck1lbnVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxyXG4gICkge31cclxuXHJcbiAgY2FuQWN0aXZhdGUoXHJcbiAgICBuZXh0OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxyXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcclxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgUHJvbWlzZTxib29sZWFuPiB8IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgeyB1cmwgfSA9IHN0YXRlO1xyXG4gICAgaWYgKCF0aGlzLm1lbnVTZXJ2aWNlLmlzRHluYW1pY1BhdGgodXJsKSkge1xyXG4gICAgICBjb25zdCB7IG5vdEZvdW5kUGF0aCB9ID0gbmV4dC5kYXRhO1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbbm90Rm91bmRQYXRoID8gYC8ke25vdEZvdW5kUGF0aH1gIDogJy8nXSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG4iXX0=