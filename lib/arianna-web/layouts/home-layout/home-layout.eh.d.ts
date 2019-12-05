import { EventHandler } from '@n7-frontend/core';
export declare class AwHomeLayoutEH extends EventHandler {
    private destroyed$;
    private configuration;
    private route;
    listen(): void;
    private loadFilters;
    handleSimpleAutocompleteClick: (payload: any) => void;
    outerLinkClick(type: any, payload: any): void;
}
