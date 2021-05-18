import { EventHandler } from '@n7-frontend/core';
import { MrSearchLayoutDS } from './search-layout.ds';
export declare class MrSearchLayoutEH extends EventHandler {
    dataSource: MrSearchLayoutDS;
    private destroyed$;
    private searchService;
    private layoutState;
    private modalService;
    private searchState;
    private linksResponse;
    private scrollRefElement;
    listen(): void;
    initStateListener(): void;
}
