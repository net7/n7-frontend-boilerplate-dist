import { EventHandler } from '@n7-frontend/core';
import { MrFormWrapperAccordionDS } from '../data-sources';
export declare class MrFormWrapperAccordionEH extends EventHandler {
    private destroy$;
    dataSource: MrFormWrapperAccordionDS;
    listen(): void;
    private listenKeyUpEvents;
}
