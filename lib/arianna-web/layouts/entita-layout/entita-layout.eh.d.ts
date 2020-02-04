import { EventHandler } from '@n7-frontend/core';
export declare class AwEntitaLayoutEH extends EventHandler {
    private destroyed$;
    private configuration;
    private route;
    private entityId;
    listen(): void;
    private handlePageSizeChange;
    /**
     * Listens to routing events of this layout.
     */
    private listenRoute;
}
