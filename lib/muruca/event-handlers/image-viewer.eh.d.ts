import { EventHandler } from '@n7-frontend/core';
import { MrImageViewerDS } from '../data-sources/image-viewer.ds';
export declare class MrImageViewerEH extends EventHandler {
    layoutId: string;
    dataSource: MrImageViewerDS;
    listen(): void;
    listenToViewer(): void;
}
