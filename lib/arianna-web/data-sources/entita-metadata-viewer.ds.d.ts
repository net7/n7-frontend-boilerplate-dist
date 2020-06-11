import { DataSource } from '@n7-frontend/core';
export declare class AwEntitaMetadataViewerDS extends DataSource {
    hasFields: boolean;
    protected transform(data: any): {
        group: {
            items: any;
        }[];
    };
}
