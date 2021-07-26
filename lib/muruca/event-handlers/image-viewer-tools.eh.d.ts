import { EventHandler } from '@n7-frontend/core';
import { MrImageViewerToolsDS } from '../data-sources/image-viewer-tools.ds';
export declare class MrImageViewerToolsEH extends EventHandler {
    dataSource: MrImageViewerToolsDS;
    listen(): void;
}
