import { EventHandler } from '@n7-frontend/core';
export declare class MrTimelineLayoutEH extends EventHandler {
    private modalService;
    private route;
    private router;
    private location;
    listen(): void;
    private listenRoute;
    itemPreviewEmit: (type: any, payload: any) => void;
}
