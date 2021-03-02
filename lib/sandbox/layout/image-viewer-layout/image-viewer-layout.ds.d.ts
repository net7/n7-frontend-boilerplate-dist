import { LayoutDataSource } from '@n7-frontend/core';
export declare class SbImageViewerLayoutDS extends LayoutDataSource {
    private communication;
    private configuration;
    onInit({ communication, configuration }: {
        communication: any;
        configuration: any;
    }): void;
}
