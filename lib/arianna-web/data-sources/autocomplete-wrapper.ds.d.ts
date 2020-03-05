import { DataSource } from '@n7-frontend/core/dist/data-source';
export declare class AwAutocompleteWrapperDS extends DataSource {
    protected transform(data: any): {
        suggestion: any[];
        loading: boolean;
    } | {
        suggestion: any[];
        loading?: undefined;
    };
    private stringTrim;
}
