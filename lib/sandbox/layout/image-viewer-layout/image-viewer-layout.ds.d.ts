import { LayoutDataSource } from '@n7-frontend/core/dist/layout-data-source';
export declare class SbImageViewerLayoutDS extends LayoutDataSource {
    private communication;
    private configuration;
    onInit({ communication, configuration }: {
        communication: any;
        configuration: any;
    }): void;
}
