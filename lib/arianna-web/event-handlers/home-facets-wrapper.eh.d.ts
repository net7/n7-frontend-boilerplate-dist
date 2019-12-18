import { EventHandler } from '@n7-frontend/core';
export declare class AwHomeFacetsWrapperEH extends EventHandler {
    private changedInput$;
    listen(): void;
    handleEyeClick: (type: any) => void;
    updateFilters: (selectedBubble: any) => void;
}
