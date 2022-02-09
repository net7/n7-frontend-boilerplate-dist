import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/menu.service";
import * as i2 from "@angular/router";
export class DynamicPathGuard {
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
}
DynamicPathGuard.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: DynamicPathGuard, deps: [{ token: i1.MrMenuService }, { token: i2.Router }], target: i0.ɵɵFactoryTarget.Injectable });
DynamicPathGuard.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: DynamicPathGuard, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: DynamicPathGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.MrMenuService }, { type: i2.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1wYXRoLmd1YXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvbXVydWNhL2d1YXJkcy9keW5hbWljLXBhdGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQWEzQyxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLFlBQ1UsV0FBMEIsRUFDMUIsTUFBYztRQURkLGdCQUFXLEdBQVgsV0FBVyxDQUFlO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDckIsQ0FBQztJQUVKLFdBQVcsQ0FDVCxJQUE0QixFQUM1QixLQUEwQjtRQUUxQixNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN4QyxNQUFNLEVBQUUsWUFBWSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNoRSxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs2R0FqQlUsZ0JBQWdCO2lIQUFoQixnQkFBZ0IsY0FGZixNQUFNOzJGQUVQLGdCQUFnQjtrQkFINUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQ2FuQWN0aXZhdGUsXHJcbiAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuICBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxyXG4gIFJvdXRlcixcclxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE1yTWVudVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9tZW51LnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNQYXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG1lbnVTZXJ2aWNlOiBNck1lbnVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxyXG4gICkge31cclxuXHJcbiAgY2FuQWN0aXZhdGUoXHJcbiAgICBuZXh0OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxyXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcclxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgUHJvbWlzZTxib29sZWFuPiB8IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgeyB1cmwgfSA9IHN0YXRlO1xyXG4gICAgaWYgKCF0aGlzLm1lbnVTZXJ2aWNlLmlzRHluYW1pY1BhdGgodXJsKSkge1xyXG4gICAgICBjb25zdCB7IG5vdEZvdW5kUGF0aCB9ID0gbmV4dC5kYXRhO1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbbm90Rm91bmRQYXRoID8gYC8ke25vdEZvdW5kUGF0aH1gIDogJy8nXSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG4iXX0=