import { ImageViewerToolsData } from '@n7-frontend/components';
import { DataSource } from '@n7-frontend/core';
export declare class SbImageViewerToolsDS extends DataSource {
    protected transform(): ImageViewerToolsData;
    toggleDescription(): void;
    toggleThumbs(): void;
    handleThumbs(index: any): void;
    handlePageChange(payload: any): void;
    updateDescription(): void;
}
