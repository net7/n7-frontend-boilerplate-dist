import { LayoutDataSource } from '@n7-frontend/core';
export declare class MrHomeLayoutDS extends LayoutDataSource {
    private configuration;
    private communication;
    private mainState;
    private layoutState;
    private configId;
    private pageConfig;
    errorTitle: any;
    errorDescription: any;
    onInit(payload: any): void;
    doRequest(): void;
    initSections(response: any): void;
    private updateHeadTitle;
}
