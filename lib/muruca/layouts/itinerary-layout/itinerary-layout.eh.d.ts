import { EventHandler } from '@n7-frontend/core';
import { MrItineraryLayoutDS } from './itinerary-layout.ds';
export declare class MrItineraryLayoutEH extends EventHandler {
    dataSource: MrItineraryLayoutDS;
    private route;
    private router;
    private layoutState;
    private modalService;
    private destroy$;
    listen(): void;
    private listenRoute;
}
