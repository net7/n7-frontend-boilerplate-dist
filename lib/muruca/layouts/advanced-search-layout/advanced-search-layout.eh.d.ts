import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { MrAdvancedSearchLayoutDS } from './advanced-search-layout.ds';
export declare class MrAdvancedSearchLayoutEH extends EventHandler {
    dataSource: MrAdvancedSearchLayoutDS;
    protected destroy$: Subject<void>;
    listen(): void;
    /**
     * @example
     * protected onInit() {
     *   this.dataSource.form.changed$.subscribe(({ id, state }) => {
     *     console.log('changed$', { id, state });
     *   });
     * }
     */
    protected onInit(): void;
}
