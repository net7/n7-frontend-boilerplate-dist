import { ImageViewerData } from '@n7-frontend/components';
import { DataSource } from '@n7-frontend/core';
import { Subject } from 'rxjs';
export declare class SbImageViewerDS extends DataSource {
    viewer: any;
    viewerLoaded$: Subject<void>;
    protected transform(): ImageViewerData;
    changePage(index: any): void;
}
