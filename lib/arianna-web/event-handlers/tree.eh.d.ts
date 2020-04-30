import { EventHandler } from '@n7-frontend/core';
export declare class AwTreeEH extends EventHandler {
    private targetOffset;
    private targetIsOpen;
    listen(): void;
    private scrollOpenedIntoView;
    private scrollLeafIntoView;
    private isInViewport;
}
