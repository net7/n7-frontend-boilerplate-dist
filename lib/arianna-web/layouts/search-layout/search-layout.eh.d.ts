import { EventHandler } from '@n7-frontend/core';
export declare class AwSearchLayoutEH extends EventHandler {
    private route;
    private facetsChange$;
    listen(): void;
    private _listenToFacetsChange;
    private _listenToRouterChanges;
}
