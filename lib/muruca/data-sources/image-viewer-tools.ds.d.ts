import { ImageViewerToolsData } from '@n7-frontend/components';
import { DataSource } from '@n7-frontend/core';
declare type ImageViewerResponse = {
    thumbs: string[];
    images: {
        url: string;
        type: string;
        caption?: string;
    }[];
};
export declare class MrImageViewerToolsDS extends DataSource {
    id: string;
    protected transform(data: ImageViewerResponse): ImageViewerToolsData;
    toggleDescription(): void;
    toggleThumbs(): void;
    handleThumbs(index: any): void;
    handlePageChange(payload: any): void;
    updateDescription(): void;
}
export {};
