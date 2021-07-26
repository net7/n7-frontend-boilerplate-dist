import { DataSource } from '@n7-frontend/core';
import { Subject } from 'rxjs';
export declare class MrImageViewerDS extends DataSource {
    id: string;
    viewer: any;
    viewerLoaded$: Subject<void>;
    protected transform(data: any): any;
    changePage(index: any): void;
}
