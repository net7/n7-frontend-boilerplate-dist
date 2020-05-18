import { EventHandler } from '@n7-frontend/core';
import { MrSearchLayoutDS } from './search-layout.ds';
export declare class MrSearchLayoutEH extends EventHandler {
    dataSource: MrSearchLayoutDS;
    private destroyed$;
    private hostEmit$;
    private guestEmit$;
    private facetsReady$;
    private doSearch$;
    private router;
    private activatedRoute;
    listen(): void;
    listenToGuest(): void;
    listenToRouterChanges(): void;
    updateRoute(): void;
    private updateFacetHeaders;
    private clearSearchState;
    private setSearchState;
}
