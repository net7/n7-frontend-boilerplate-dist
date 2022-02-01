import * as i0 from "@angular/core";
export declare type GalleryData = {
    selected: null | GalleryItem;
    items: GalleryItem[];
};
export declare type GalleryItem = {
    id: string | number;
    thumbSrc: string;
    fullSrc: string;
    title: string;
    payload: any;
};
export declare class MrGalleryComponent {
    data: GalleryData;
    emit: (type: string, payload?: any) => void;
    grid: number | null;
    onClick(payload: any): void;
    onClose(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrGalleryComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrGalleryComponent, "mr-gallery", never, { "data": "data"; "emit": "emit"; "grid": "grid"; }, {}, never, never>;
}
