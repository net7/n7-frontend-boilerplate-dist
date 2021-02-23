import { ActivatedRoute, Router } from '@angular/router';
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { MrPostsLayoutDS } from './posts-layout.ds';
export declare class MrPostsLayoutEH extends EventHandler {
    protected activatedRoute: ActivatedRoute;
    protected router: Router;
    private layoutState;
    protected destroy$: Subject<void>;
    dataSource: MrPostsLayoutDS;
    listen(): void;
    /** URL changes */
    protected listenToRouterChanges(): void;
    protected updateRouter(queryParams: any): void;
}
