import { DataSource } from '@n7-frontend/core';
import { GalleryData } from '../components/gallery/gallery';
declare type GalleryResponse = {
    id: string | number;
    title: string;
    thumbnail: string;
    image: string;
}[];
export declare class MrGalleryDS extends DataSource {
    id: string;
    protected transform(data: GalleryResponse): GalleryData;
    setSelected(itemId: number | string): void;
    removeSelected(): void;
}
export {};
