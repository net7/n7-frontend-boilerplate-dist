import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
interface ChangedSubjects {
    [key: string]: Subject<any>;
}
export declare class SearchFacetsLayoutEH extends EventHandler {
    changed$: ChangedSubjects;
    private destroyed$;
    private searchService;
    listen(): void;
    initChangedListener({ facets }: {
        facets: any;
    }): void;
    initStateListener(): void;
}
export {};
