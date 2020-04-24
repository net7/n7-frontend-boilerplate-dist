import { EventHandler } from '@n7-frontend/core';
export declare class AwGalleryLayoutEH extends EventHandler {
    private destroyed$;
    private route;
    private facetsChange$;
    private configuration;
    listen(): void;
    private _listenToFacetsChange;
    private _listenToRouterChanges;
}
