import { EventHandler } from '@n7-frontend/core';
import { MrStaticLayoutDS } from './static-layout.ds';
export declare class MrStaticLayoutEH extends EventHandler {
    private route;
    dataSource: MrStaticLayoutDS;
    private layoutState;
    private destroy$;
    listen(): void;
    private listenRoute;
}
