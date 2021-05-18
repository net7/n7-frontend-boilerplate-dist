import { ActivatedRoute, Router } from '@angular/router';
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { MrAdvancedResultsLayoutDS } from './advanced-results-layout.ds';
export declare class MrAdvancedResultsLayoutEH extends EventHandler {
    protected activatedRoute: ActivatedRoute;
    protected router: Router;
    private layoutState;
    private modalService;
    protected destroy$: Subject<void>;
    protected scrollRefElement: HTMLElement;
    dataSource: MrAdvancedResultsLayoutDS;
    listen(): void;
    /** URL changes */
    protected listenToRouterChanges(): void;
    protected updateRouter(queryParams: any): void;
}
