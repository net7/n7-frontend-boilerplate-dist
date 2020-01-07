import { EventHandler } from '@n7-frontend/core';
export declare class MainLayoutEH extends EventHandler {
    private destroyed$;
    private route;
    private mainState;
    listen(): void;
    private _listenRouterChanges;
    private _listenMainStateChanges;
}
