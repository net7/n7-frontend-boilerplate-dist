import { DataSource } from '@n7-frontend/core';
import { ImageViewerData } from '@n7-frontend/components';
export declare class AwSchedaImageDS extends DataSource {
    private instance;
    protected transform(data: any): ImageViewerData;
    hasInstance(): boolean;
    updateImages(data: any): void;
    private getTileSources;
}
