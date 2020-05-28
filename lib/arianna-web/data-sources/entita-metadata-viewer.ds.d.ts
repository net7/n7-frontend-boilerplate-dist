import { DataSource } from '@n7-frontend/core';
export declare class AwEntitaMetadataViewerDS extends DataSource {
    hasGroups: boolean;
    protected transform(data: any): {
        group: any[];
    };
    static unpackFields(fields: any, metadataToShow?: any): any[];
}
