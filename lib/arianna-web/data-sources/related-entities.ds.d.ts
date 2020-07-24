import { DataSource } from '@n7-frontend/core';
import { ItemPreviewData } from '@n7-frontend/components';
export declare class AwRelatedEntitiesDS extends DataSource {
    protected transform: (data: any) => {
        previews: ItemPreviewData[];
    };
}
