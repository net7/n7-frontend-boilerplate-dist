import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { SearchFacetsConfig } from './search-facets-config';
interface ChangedSubjects {
    [key: string]: Subject<any>;
}
export declare class SearchFacetsLayoutEH extends EventHandler {
    changed$: ChangedSubjects;
    private destroyed$;
    private hostEmit$;
    private guestEmit$;
    listen(): void;
    initChangedListener(data: SearchFacetsConfig): void;
    listenFacetsReady(): void;
    listenToHost(): void;
}
export {};
