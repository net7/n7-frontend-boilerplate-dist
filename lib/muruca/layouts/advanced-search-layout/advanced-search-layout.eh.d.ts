import { EventHandler } from '@n7-frontend/core';
import { MrAdvancedSearchLayoutDS } from './advanced-search-layout.ds';
export declare class MrAdvancedSearchLayoutEH extends EventHandler {
    dataSource: MrAdvancedSearchLayoutDS;
    private destroy$;
    listen(): void;
    private listenFormChanges;
}
