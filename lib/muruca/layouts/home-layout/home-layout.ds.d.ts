import { LayoutDataSource } from '@n7-frontend/core/dist/layout-data-source';
export declare class MrHomeLayoutDS extends LayoutDataSource {
    private configuration;
    private communication;
    private mainState;
    private configId;
    private pageConfig;
    onInit(payload: any): void;
    doRequest(): void;
    initSections(response: any): void;
    private updateHeadTitle;
}
