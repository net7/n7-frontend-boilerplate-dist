import { ItemPreviewData } from '@n7-frontend/components';
import { DataSource } from '@n7-frontend/core';
export declare class MrItemPreviewDS extends DataSource {
    id: string;
    protected transform(data: any): ItemPreviewData;
}
