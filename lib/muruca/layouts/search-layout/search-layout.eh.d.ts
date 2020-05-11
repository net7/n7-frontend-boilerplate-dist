import { EventHandler } from '@n7-frontend/core';
export declare class MrSearchLayoutEH extends EventHandler {
    private destroyed$;
    private hostEmit$;
    private guestEmit$;
    private router;
    private activatedRoute;
    listen(): void;
    listenToGuest(): void;
    listenToRouterChanges(): void;
}
