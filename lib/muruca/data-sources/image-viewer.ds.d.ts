import { DataSource } from '@n7-frontend/core';
export declare class MrImageViewerDS extends DataSource {
    id: string;
    viewer: any;
    protected transform(data: any): any;
}
