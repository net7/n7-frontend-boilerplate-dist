import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { MrAdvancedSearchLayoutDS } from './advanced-search-layout.ds';
export declare class MrAdvancedSearchLayoutEH extends EventHandler {
    dataSource: MrAdvancedSearchLayoutDS;
    protected destroy$: Subject<void>;
    listen(): void;
    protected listenFormChanges(): void;
}
