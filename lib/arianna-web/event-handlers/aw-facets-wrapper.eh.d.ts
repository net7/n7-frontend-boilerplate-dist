import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
export declare class AwFacetsWrapperEH extends EventHandler {
    internalFacetsChange$: Subject<any>;
    externalFacetsChange$: Subject<any>;
    listen(): void;
}
