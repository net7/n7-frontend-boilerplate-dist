import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MrMenuService } from '../services/menu.service';
export declare class DynamicPathGuard implements CanActivate {
    private menuService;
    private router;
    constructor(menuService: MrMenuService, router: Router);
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean;
}
