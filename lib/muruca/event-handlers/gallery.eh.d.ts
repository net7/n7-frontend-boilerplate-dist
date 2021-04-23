import { EventHandler } from '@n7-frontend/core';
import { MrGalleryDS } from '../data-sources';
export declare class MrGalleryEH extends EventHandler {
    dataSource: MrGalleryDS;
    listen(): void;
}
