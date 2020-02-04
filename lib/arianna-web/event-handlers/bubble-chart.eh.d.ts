import { EventHandler } from '@n7-frontend/core';
export declare class AwBubbleChartEH extends EventHandler {
    initialLoad: boolean;
    listen(): void;
    toggleSelection: (id: any) => void;
    toggleFilter: (f: any) => void;
}
