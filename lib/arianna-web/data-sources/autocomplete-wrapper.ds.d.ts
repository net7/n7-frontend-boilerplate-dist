import { DataSource } from '@n7-frontend/core';
export declare class AwAutocompleteWrapperDS extends DataSource {
    protected transform(data: any): {
        suggestion: any[];
    };
}
