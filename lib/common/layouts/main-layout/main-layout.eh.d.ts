import { EventHandler } from '@n7-frontend/core';
export declare class MainLayoutEH extends EventHandler {
    private destroyed$;
    private route;
    private router;
    private mainState;
    listen(): void;
    private _listenRouterChanges;
    private _listenMainStateChanges;
}
